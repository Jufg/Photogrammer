import React from "react";
import {Footer, Header} from "./index";

const Layout = (props) => {

    return (
        <div className="test">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout
