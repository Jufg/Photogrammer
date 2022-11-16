import {LineWobble} from "@uiball/loaders";
import {useEffect, useState} from "react";

const Image_Loader = ({src, alt, styles}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        loading ?
            <div className="flex flex-col items-center justify-between my-40">
                <LineWobble
                    size={80}
                    lineWeight={5}
                    speed={1.75}
                    color="black"
                />
            </div> :
            <img src={`https://ipfs.io/ipfs/${src}`}
                 alt={alt}
                 onLoad={() => setLoading(false)}
                 className={styles}/>

    )
}

export default Image_Loader