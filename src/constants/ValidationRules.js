export const ValidationRules = {
    fullName: /^([a-zA-Z][a-zA-Z ]*){3,60}$/,
    firstName: /^([a-zA-Z. ]){0,90}$/,
    middleName: /^([a-zA-Z. ]){0,30}$/,
    lastName: /^([a-zA-Z. ]){0,30}$/,
    cityName: /^([a-zA-Z]){0,30}$/,
    fatherFirstName: /^([a-zA-Z. ]){1,90}$/,
    fathersMiddleName: /^([a-zA-Z. ]){0,30}$/,
    fathersLastName: /^([a-zA-Z. ]){0,30}$/,
  
    mothersFirstName: /^([a-zA-Z. ]){1,90}$/,
    mothersMiddleName: /^([a-zA-Z. ]){0,30}$/,
    mothersLastName: /^([a-zA-Z.])/,
    spouseFirstName: /^([a-zA-Z. ]){1,30}$/,
    mobileNumber: /^([6-9]){1}([0-9]){9}$/g,
    indianNumber: /^[0-9]{0,10}$/,
    outSideIndiaMobileNumber: /^[0-9]{0,14}$/,
    annualIncome: /^[0-9]{0,9}$/,
    OTP: /^[0-9]{0,4}$/,
  
    emailID: /^(?!.*\.\.)[\w\.-]+@[\w\.-]+\.\w+$/,
    pancard: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/g,
    aadharcard: /^[1-9]\d{11}$/g,
    dlCard:
      /(([A-Z]{2}[0-9]{2})|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/g,
    passportCard: /^[A-Z]{1}[0-9]{7}$/g,
    voterCard: /^([a-zA-Z]){3}([0-9]){7}?$/g,
    employeeCode: /^[a-zA-Z0-9]{2,30}$/,
    shareCode: /^[0-9]{4}$/,
  
    // ADDRESS_DETAILS
    flatRoomDoorBlockNo: /^.{0,50}$/,
    areaLocalityTaluka: /^.{0,50}$/,
    pinCode: /^[1-9]\d{5}$/,
    cityTownDistrict: /^.{0,50}$/,
  
    // NOMINEE_DETAILS
    guardianFirstName: /^([a-zA-Z. ]){0,90}$/,
    guardianMiddleName: /^([a-zA-Z. ]){0,30}$/,
  
    guardianLastName: /^([a-zA-Z. ]){0,30}$/,
  
    bankAccountNumber: /^[0-9]{6,18}$/,
    bankIfscCode: /^[A-Za-z0-9]{11}$/,
    bankIfscCodeNew: /^[A-Za-z]{4}[0]{1}[a-zA-Z0-9]{6}$/,
    bankName: /^([a-zA-Z]){3,50}$/,
    branchAddress: /^.{0,50}$/,
    percentageShare: /^[1-9][0-9]?$|^100$/g,
    placeOfBirth: /^([a-zA-Z0-9 ]){1,30}$/,
    fetchPinCodeAddres: /[^\d ]+/g,
    currentAge: /^([1][8-9]|[2-6][0-9]|[7][0-9])$/,
    earningAge: /^(1[8-9])|([2-5][0-9])|(6[0-5])$/,
    income: /^[0-9]$|^[1-9][0-9]$|^(40)$/,
    expenses: /^[0-9]$|^[1-9][0-9]$|^(40)$/,
    //Set Password
    password: /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,20}$/,
  
    // Others
    corporateName: /^([a-zA-Z0-9\w\D\S]){1,50}$/,
    employeeId: /^[a-zA-Z0-9_#.-]+$/,
    onlyAlpha: /^\d+$/,
    onlyNumeric: /^[0-9]{0,90}$/,
  
    // Contribution
    pran: /^[0-9]{12,12}$/,
  
    //Savings
    investedAmmount: /^[1-9]\d*$/,
    // ProposerForm
    addressPinCode: /(^[0-9]+$|^$)/,
    nameFieldAllowed: /^([a-zA-Z][a-zA-Z ]*){0,60}$/,
    nameFieldValidate: /^([a-zA-Z][a-zA-Z ]*){3,60}$/,
    nomineePercentShares:
      /^(?!0(?:\.0{1,2})?%?$)(?:\d{1,2}(?:\.\d{1,2})?|100(?:\.0{1,2})?)%?$|^100$/,
    alphanumericCharacters: /^(?![\s])[a-zA-Z0-9\s]*$/,
  };
  