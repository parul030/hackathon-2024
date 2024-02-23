import React, { useState } from 'react';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function TabContent({ tab }) {
    if (tab === 'Home') {
        return <div>This is the Home tab content.</div>;
    } else if (tab === 'About') {
        return <div>This is the About tab content.</div>;
    } else if (tab === 'Contact') {
        return <div>This is the Contact tab content.</div>;
    } else {
        return <div>No content available for this tab.</div>;
    }
}

function Tabs() {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs">
                <button onClick={() => handleTabClick('Home')}>Home</button>
                <button onClick={() => handleTabClick('About')}>About</button>
                <button onClick={() => handleTabClick('Contact')}>Contact</button>
            </div>
            <div className="tab-content">
                <TabContent tab={activeTab} />
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <NavBar />
            <Tabs />
        </div>
    );
}

export default App;
