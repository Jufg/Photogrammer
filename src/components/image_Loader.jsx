import {LineWobble} from "@uiball/loaders";
import {useEffect, useState} from "react";
import {MdImageNotSupported} from "react-icons/md";

const Image_Loader = ({src, alt, styles}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        error ?
            <div className="flex flex-col items-center justify-between my-40">
                <MdImageNotSupported size={'25%'}/>
            </div> :
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
                     onError={() => setError(true)}
                     className={styles}
                />

    )
}

export default Image_Loader