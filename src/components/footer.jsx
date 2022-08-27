import React from "react";

const Footer = () => {

    return (<div className="h-[10vh] bg-[#1B1A20] text-white px-4 md:px-[20%] flex justify-center relative">
            <p className="absolute top-1/2 -translate-y-1/2">© Photogrammer | <a href="#/imprint"
                                                                                 className="hover:underline hover:text-white/80">Imprint</a>
            </p>
        </div>)
}

export default Footer