'use client'

import wretch from 'wretch'
import AbortAddon from 'wretch/addons/abort'
export const resolveHostUrl = () => {
  // TODO: Resolve host based on the env.
  return 'https://finease-b5044a79ab8d.herokuapp.com/'
}

export const resolveHostUrlInternal = () => {
  return 'https://finease-b5044a79ab8d.herokuapp.com/'
}
const handle403 = (e) => {
  throw e
}

const handleError = (e) => {
  throw e
}

export const parseCookie = (str) =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0]?.trim())] = decodeURIComponent(v[1]?.trim())
      return acc
    }, {})

const resolveHeader = (token = '', refreshToken = '') => {
  const cookie = typeof window === 'undefined' ? '' : document?.cookie || ''
  const cookieObj = parseCookie(cookie)
  const SessionId = cookieObj?.sessionId
  const AccessToken = cookieObj?.token || token
  const RefreshToken = cookieObj?.refreshToken || refreshToken

  // FIXME: need to use dotenv to set this up dynamically by environment
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Origin': 'dev.api.retire100.aws',
    // 'Access-Control-Allow-Headers': 'Cookie',
    Accept: '*/*',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'en-US,en;q=0.5',
    // 'Sec-Fetch-Dest': '*.retire100.aws',
    // 'Sec-Fetch-Mode': 'cors',
    // 'Sec-Fetch-Site': '*.retire100.aws',
    Connection: 'Keep-Alive',
    ...(!!SessionId && { SessionId }),
    ...(!!AccessToken && { AccessToken }),
    ...(!!RefreshToken && { RefreshToken }),
  }
}

const refreshMiddleware = (next) => async (url, opts) => {
  try {
    let newHeader = {}
    const response = await next(url, opts)
    if (response.ok) {
      return response
    }
    if (response.status !== 401 && response.status !== 403) {
      throw response
    } else {
      const cookie = typeof window === 'undefined' ? '' : document?.cookie || ''
      const cookieObj = parseCookie(cookie)
      const refreshToken = cookieObj?.refreshToken || ''
      // const refreshResponse = await fetcherGet('member/auth/refreshToken');
      const refreshResponse = await wretch(resolveHostUrl()) // Base url
        .headers(resolveHeader())
        .get('member/auth/refreshToken')
        .json()

      if (refreshResponse) {
        newHeader = {
          AccessToken: refreshResponse?.data?.accessToken,
          RefreshToken: refreshResponse?.data?.refreshToken,
        }
        const expires =
          '; expires=' +
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        document.cookie =
          'token' +
          '=' +
          (refreshResponse?.data?.accessToken || '') +
          '' +
          '; path=/'
        document.cookie =
          'refreshToken' +
          '=' +
          (refreshResponse?.data?.refreshToken || '') +
          expires +
          '; path=/'
      }
    }

    return next(url, { ...opts, headers: newHeader })
  } catch (error) {
    throw error
  }
}

const fetcher = wretch(resolveHostUrl()) // Base url
//   .middlewares([refreshMiddleware])
  .addon(AbortAddon())
  .resolve((_) => _.forbidden(handle403))

export const fetcherWithGetCall = async (
  url,
  abortController = new AbortController()
) => {
  try {
    const response_data = await fetcher
      .headers(resolveHeader())
      .signal(abortController)
      .get(url)
      .unauthorized(handleError)
      .forbidden(handleError)
      .notFound(handleError)
      .timeout(handleError)
      .error(499, handleError)
      .json()
    return response_data?.data
  } catch (err) {
    throw err || new Error('Api request failed due to an unknown error')
  }
}

export const fetcherWithPostCall = async (
  url,
  data,
  abortController = new AbortController()
) => {
  try {
    const response_data = await fetcher
      .headers(resolveHeader())
      .signal(abortController)
      .url(url)
      .post(data)
      .unauthorized(handleError)
      .forbidden(handleError)
      .notFound(handleError)
      .timeout(handleError)
      .error(499, handleError)
      .json()
    return response_data?.data
  } catch (err) {
    throw err || new Error('Api request failed due to an unknown error')
  }
}

export const fetcherGet = async (
  url
  // abortController = new AbortController()
) => {
  return (
    fetcher
      // .signal(abortController)
      .headers(resolveHeader())
      .get(url)
      .json()
  )
}

export const fetcherPost = async (
  url,
  data,
  token
  // abortController = new AbortController()
) => {
  return (
    fetcher
      // .signal(abortController)
      .headers(resolveHeader(token))
      .url(url)
      .post(data)
      .json()
  )
}
