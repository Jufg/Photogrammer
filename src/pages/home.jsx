import React from "react";
import {Layout} from "../components";
import {corse_img, lambo_img, monaco_img} from "../rsc/img";
import {home_svg, wallpaper_svg} from "../rsc/svg";

const Home = () => {

    return (
        <Layout>
            <SectionHome/>
            <SectionWallpaper/>
        </Layout>
    );
}

const SectionHome = () => {
    return (
        <section id="home" className="md:h-screen px-4 md:px-[20%] mt-20 mb-20">
            <div className="w-full flex justify-center md:justify-end">
                <img src={home_svg} alt="Home svg" className="md:w-2/3 w-full"/>
            </div>
            <div className="h-fit mt-[33%] md:mt-0">
                <h1 className="font-medium text-3xl md:text-5xl mb-2">Photogramming</h1>
                <h2 className="font-light text-xl md:text-3xl">Photography and Programming</h2>
            </div>
        </section>
    );
}

const SectionWallpaper = () => {

    const imgStyles = 'w-1/2 md:w-1/4 my-4 md:my-0 hover:scale-105 transition ease-in-out duration-300 cursor-pointer';

    return (
        <section id="Wallpaper" className="md:h-screen px-4 md:px-[20%]">
            <div className="flex flex-col w-full">
                <a href="/wallpaper"
                   className="h-fit w-fit self-end flex flex-col items-end hover:text-[#707070] hover:underline">
                    <h2 className="font-medium text-2xl md:text-4xl mb-2 w-fit">Wallpaper</h2>
                    <h3 className="font-light md:text-2xl">Downnload your Wallpaper now!</h3>
                </a>
                <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 z-10">
                    <a href="/wallpaper" className={imgStyles}>
                        <img src={corse_img} alt="corse img" className="rounded-2xl"/>
                    </a>
                    <a href="/wallpaper" className={imgStyles}>
                        <img src={monaco_img} alt="corse img" className="rounded-2xl"/>
                    </a>
                    <a href="/wallpaper" className={imgStyles}>
                        <img src={lambo_img} alt="corse img" className="rounded-2xl"/>
                    </a>
                </div>
                <div>
                    <img src={wallpaper_svg} alt="wallpaper svg"
                         className="w-1/3 scale-[2] md:scale-150 -z-10 -translate-y-1/2  md:-translate-y-1/4 translate-x-1/4 md:-translate-x-1/4"/>
                </div>
            </div>
        </section>
    );
}

export default Home
