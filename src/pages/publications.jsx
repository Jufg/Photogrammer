import React from "react";
import {Layout} from "../components";
import {Helmet} from "react-helmet";

const Publications = () => {

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Publications - Photogrammer</title>
                <link rel="canonical" href="https://photogrammer.dev/"/>
            </Helmet>
            <p>Publications</p>
        </Layout>
    )
}

export default Publications
