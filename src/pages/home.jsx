import React from "react";
import {Layout} from "../components";
import {home_svg} from "../rsc";

const Home = () => {

    return (
        <Layout>
            <SectionHome />
        </Layout>
    );
}

const SectionHome = () => {
    return (
        <section className="h-screen px-4 md:px-[20%] pt-20 pb-40">
            <div className=" h-full w-full">
                <div className="w-full flex justify-center md:justify-end">
                    <img src={home_svg} alt="Home svg" className="md:w-2/3 w-full"/>
                </div>
                <div className="h-fit mt-[33%] md:mt-0">
                    <h1 className="font-medium text-3xl md:text-5xl mb-2">Photogramming</h1>
                    <h2 className="font-light text-xl md:text-3xl">Photography and Programming</h2>
                </div>
            </div>
        </section>
    );
}

export default Home
