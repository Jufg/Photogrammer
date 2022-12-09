import React from "react";
import {Layout} from "../components";
import {Helmet} from "react-helmet";

const Portfolio = () => {

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Portfolio - Photogrammer</title>
                <link rel="canonical" href="https://photogrammer.dev/"/>
            </Helmet>
            <p>Portfolio</p>
        </Layout>
    )
}

export default Portfolio
