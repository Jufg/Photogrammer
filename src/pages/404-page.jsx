import React from "react";
import {Layout} from "../components";
import {under_construction_svg} from "../rsc/svg";
import {Helmet} from "react-helmet";

const ErrorPage404 = () => {

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>404-Error - Photogrammer</title>
                <link rel="canonical" href="https://photogrammer.dev/404"/>
            </Helmet>
            <section id="404" className="md:h-fit px-6 md:px-[20%] mt-20 mb-20">
                <div className="w-full flex justify-center md:justify-end">
                    <img src={under_construction_svg} alt="Home svg" className="md:w-2/3 w-full"/>
                </div>
                <div className="h-fit mt-[33%] md:mt-0 w-2/3">
                    <h1 className="font-medium text-3xl mt-20 md:text-5xl mb-2">This site is under construction!</h1>
                </div>
            </section>
        </Layout>
    )
}

export default ErrorPage404
