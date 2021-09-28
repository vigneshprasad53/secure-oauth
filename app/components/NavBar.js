
import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";


import { TabMenu } from 'primereact/tabmenu';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";

const NavBar = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        props.history.push(items[activeIndex].component)
    }, [activeIndex])

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', component: '/' },
        { label: 'User', icon: 'pi pi-fw pi-android', component: '/user' },
        { label: 'Table', icon: 'pi pi-fw pi-pencil', component: '/coockeddata' },

    ];
    return (
        <div>
            {/* <Link to={items[activeIndex].component} /> */}
            <div className="card">
                <TabMenu
                    model={items}
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                />
            </div>
        </div>
    );
}



export default withRouter(NavBar)