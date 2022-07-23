import React from "react";
import {Layout} from "../components";
import {gallery_bg_svg, home_svg, portfolio_svg, wallpaper_svg} from "../rsc/svg";
import {useNavigate} from "react-router-dom";
import {useFetchImg} from "../hooks/useFetch";
import {arraySplit} from "../utils/array.utils";
import {Helmet} from "react-helmet";

const Home = () => {

    return (<Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Photogrammer</title>
            <link rel="canonical" href="https://photogrammer.dev/" />
        </Helmet>
        <SectionHome/>
        <SectionWallpaper/>
        <SectionPortfolio/>
        <SectionGallery/>
    </Layout>);
}

const SectionHome = () => {
    return (<section id="home" className="md:h-fit px-6 md:px-[20%] mt-20 mb-40">
        <div className="w-full flex justify-center md:justify-end">
            <img src={home_svg} alt="Home svg" className="md:w-2/3 w-full"/>
        </div>
        <div className="h-fit mt-[20%] md:mt-0">
            <h1 className="font-medium text-3xl md:text-5xl mb-2">Photogramming</h1>
            <h2 className="font-light text-xl md:text-3xl">Photography and Programming</h2>
        </div>
    </section>);
}

const SectionWallpaper = () => {

    const images = useFetchImg(["home", "wallpaper"], 'sm');

    const imgStyles = 'w-2/3 md:w-1/4 my-4 md:my-0 hover:scale-105 transition ease-in-out duration-300 cursor-pointer';

    return (<section id="Wallpaper" className="md:h-screen px-6 md:px-[20%]">
        <div className="flex flex-col w-full">
            <div className="h-fit w-fit self-end flex flex-col items-end">
                <h2 className="font-medium text-2xl md:text-4xl mb-2 w-fit">Wallpaper</h2>
                <h3 className="font-light md:text-2xl">Downnload your Wallpaper now!</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 z-10">
                {images.map((item, index) => (<a key={index} href="/wallpaper" className={imgStyles}>
                    <img src={`https://ipfs.io/ipfs/${item.img_cid}`} alt={item.alt}
                         className="rounded-2xl"/>
                </a>))}
            </div>
            <div>
                <img src={wallpaper_svg} alt="wallpaper svg"
                     className="w-1/3 scale-[2] md:scale-150 -z-10 -translate-y-1/2  md:-translate-y-1/4 translate-x-1/4 md:-translate-x-1/4"/>
            </div>
        </div>
    </section>);
}

const SectionPortfolio = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/portfolio');
    }

    const bg = {
        white_glassmorphism: 'bg-gradient-to-r from-white/10 to-white/5 border-solid border-2 border-white/30 backdrop-blur-sm',
    }

    return (
        <section id="portfolio" className="h-screen mt-10 px-6 md:px-[20%] bg-[#1B1A20] text-white pt-12 md:pt-[10vh]">
            <div className="flex flex-col w-full h-[100%]">
                <h2 className="font-medium text-2xl md:text-4xl mb-2 w-fit">Portfolio</h2>
                <h3 className="font-light md:text-2xl text-white/80">&#60;Web-development and <br/>Blockchain based
                    projects/></h3>
                <div className="flex flex-col md:flex-row w-full h-full mt-10 md:mt-0">
                    <div className="w-full pt-20 md:pt-0 md:w-1/2 flex flex-row justify-center">
                        <div className="flex flex-col justify-center">
                            <button
                                onClick={routeChange}
                                className={`px-4 py-2 h-fit font-semibold text-lg ${bg.white_glassmorphism} hover:underline blue-animate text-white rounded-lg shadow-sm hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300`}>
                                Explore my projects and skills!
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full md:w-1/2 flex flex-col items-center justify-center">
                        <img src={portfolio_svg} alt="portfolio svg"
                             className="w-[70vw] md:w-[30vw] translate-x-1/5"/>
                    </div>
                </div>
            </div>
        </section>);
}

const SectionGallery = () => {

    const images = arraySplit(useFetchImg(["home", "gallery"], 'sm'), 3);

    const imgStyles = 'w-auto md:w-1/4 my-4 px-5 md:px-0 md:my-0 hover:scale-105 transition ease-in-out duration-300 cursor-pointer';

    return (<section id="Gallery" className="px-6 pt-5 md:pt-[10vh] md:px-[20%]">
        <div className="relative flex flex-col w-full mb-[5%]">
            <div className="h-fit w-fit self-end flex flex-col items-end">
                <h2 className="font-medium text-2xl md:text-4xl mb-2 w-fit">Gallery</h2>
                <h3 className="font-light md:text-2xl">Some Images i took...</h3>
            </div>
            <div className="flex flex-col mt-10 ">
                {images.map((item, index) => (
                    <div key={index}
                         className="flex flex-col md:flex-row items-center justify-between py-0 md:py-10 px-4 z-10">
                        {item.map((item, index) => (
                            <a key={index} href="/gallery" className={imgStyles}>
                                <img src={`https://ipfs.io/ipfs/${item.img_cid}`} alt={item.alt}
                                     className="rounded-2xl"/>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <img src={gallery_bg_svg} alt="gallery bg svg"
                     className="absolute mt-20 -translate-x-1/4 md:-translate-x-1/2 -translate-y-[110%] md:-translate-y-full"/>
            </div>
        </div>
    </section>)
}

export default Home
