import React from "react";
import {Footer, Header} from "./index";

const Layout = (props) => {

    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout
