import React, {useState} from "react";
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

const NavbarItem = ({menu, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer hover:text-[#707070] ${classProps}`}>
            <a href={menu.path}>
                {menu.title}
            </a>
        </li>
    );
}

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const menu = [
        {title: "Wallpaper", path: "/wallpaper"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Gallery", path: "/gallery"},
        {title: "Publications", path: "/publications"},
        {title: "Imprint", path: "/imprint"}
    ];

    return (
        <div className="pt-28 px-4 md:px-[20%]">
            <nav className="w-auto flex justify-between items-baseline">
                <div className="">
                    <span className="font-medium text-xl xl:text-4xl"><a href="/">Photogrammer</a></span>
                </div>
                <div className="flex relative">
                    {toggleMenu ? <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer"
                                                  onClick={() => setToggleMenu(false)}/> :
                        <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer"
                                    onClick={() => setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <ul
                            className="white-glassmorphism z-10 fixed pt-28 -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md animate-slide-in"
                        >
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            <li className={`mx-4 cursor-pointer hover:text-[#707070] my-2 text-lg`}>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            {menu.map((item, index) => (
                                <NavbarItem key={item + index} menu={item} classProps="my-2 text-lg"/>))}
                        </ul>)}
                </div>
                <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial text-xs xl:text-base">
                    {menu.map((item, index) => (
                        <NavbarItem key={item + index} menu={item}/>))}
                </ul>
            </nav>
            <div className="bg-[#707070] h-[5px] rounded-full mt-12"/>
        </div>
    )
}

export default Header