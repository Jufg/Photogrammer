import React from "react";
import {Layout} from "../components";
import {wallpaper_home_svg} from "../rsc/svg";

const Wallpaper = () => {

    return (
        <Layout>
            <SectionHome/>
        </Layout>
    )
}

const SectionHome = () => {

    return (<section id="home" className="md:h-screen px-6 md:px-[20%] mt-20 mb-20">
        <div className="translate-y-10 translate-x-1 md:translate-x-[10%] w-full flex justify-center md:justify-end">
            <img src={wallpaper_home_svg} alt="Home svg" className="scale-110 md:w-2/3 w-full"/>
        </div>
        <div className="h-fit mt-[33%] md:mt-0">
            <h1 className="font-medium text-3xl md:text-5xl mb-2">Wallpaper</h1>
            <h2 className="w-auto md:w-1/2 font-light text-lg md:text-3xl">Download your favourite Wallpaper, for
                Android or ios!</h2>
        </div>
    </section>)
}


export default Wallpaper
