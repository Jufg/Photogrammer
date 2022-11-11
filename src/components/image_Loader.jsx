import {Ring} from "@uiball/loaders";
import {useEffect, useState} from "react";

const Image_Loader = ({src, alt, styles}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return(
        <div className="h-[10vh]">
            {loading ?
                <Ring
                    size={40}
                    lineWeight={5}
                    speed={2}
                    color="black"
                />:
                <img src={`https://ipfs.io/ipfs/${src}`} alt={alt}
                     className={styles}/>
            }
        </div>
    )
}

export default Image_Loader