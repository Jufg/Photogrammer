import React, {useState} from "react";
import {Dropdown, Layout} from "../components";
import {wallpaper_home_svg} from "../rsc/svg";
import {useFetchImg} from "../hooks/useFetch";
import {arraySplit} from "../utils/array.utils";

const Wallpaper = () => {

    return (
        <Layout>
            <SectionHome/>
            <SectionWallpapers/>
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

const SectionWallpapers = () => {

    const [format, setFormat] = useState('16:9')

    const images = arraySplit(useFetchImg(["wallpaper"], 'sm'), 3);
    //const images_og = arraySplit(useFetchImg(["wallpaper"], 'og'), 3);

    const imgStyles = 'w-2/3 md:w-1/4 my-4 md:my-0 hover:scale-105 transition ease-in-out duration-300 cursor-pointer';

    return (<section id="Wallpaper" className="px-6 md:px-[20%]">
        <div className="flex flex-col w-full mb-10">
            <div className="h-fit w-fit flex flex-row items-center">
                <h3 className="font-light h-full md:text-2xl">Choose your format:</h3>
                <div className="ml-2 md:ml-10"><Dropdown selected={format} setSelected={setFormat}
                                                         options={['16:9', '21:9']}/></div>
            </div>
            <div className="mt-20 md:mt-0">
                {images.map((item, index) => (
                    <div key={index}
                         className="flex flex-col md:flex-row items-center justify-between mt-0 md:mt-20 px-4">
                        {item.map((item, index) => (
                            <div key={index} onClick={window.open(`https://ipfs.io/ipfs/${item.img_cid}`)} className={imgStyles} download="">
                                <img src={`https://ipfs.io/ipfs/${item.img_cid}`} alt={item.alt}
                                     className="rounded-2xl"/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </section>);
}

export default Wallpaper
