import React from "react";
import {Layout} from "../components";
import {Helmet} from "react-helmet";

const Gallery = () => {

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Gallery - Photogrammer</title>
                <link rel="canonical" href="https://photogrammer.dev/"/>
            </Helmet>
            <p>Gallery</p>
        </Layout>
    )
}

export default Gallery
