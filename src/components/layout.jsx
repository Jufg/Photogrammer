import React from "react";
import {Footer, Header} from "./index";

const Layout = (props) => {

    return (
        <div className="px-4 md:px-[20%]">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout
