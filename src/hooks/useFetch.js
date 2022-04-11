import {useEffect, useState} from "react";
import {Web3Storage} from "web3.storage";
import rsc from '../rsc/recources.json';
import {arraysEqual} from "../utils/array.utils";

const APIKEY = process.env.REACT_APP_WEB3_STORAGE_API;

const makeStorageClient = () => {
    return new Web3Storage({token: APIKEY})
}

const client = makeStorageClient()

export const useFetchImg = (pages, size) => {

    let array = [];

    switch (size) {
        case 'sm':
            rsc.rsc[0].small.map(async (item, index) => {
                if (arraysEqual(item.pages, pages)) {

                    let img = {
                        name: item.name,
                        alt: item.alt,
                        cid: item.cid,
                        img_cid: FetchCid(item.cid)
                    }

                    array.push(img)
                }
            })

            return array;
        case 'og':
            rsc.rsc[0].original.map(async (item, index) => {
                if (arraysEqual(item.pages, pages)) {

                    let img = {
                        index,
                        name: item.name,
                        alt: item.alt,
                        cid: item.cid,
                        img_cid: FetchCid(item.cid)
                    }

                    array.push(img)
                }
            })

            return array;
        default:
            return 'Not found.';
    }

}

export const FetchCid = (cid) => {
    const [fileCid, setFileCid] = useState("");

    const retrieve = async (cid) => {
        const res = await client.get(cid)
        //console.log(`Got a response! [${res.status}] ${res.statusText}`)

        if (!res.ok) {
            throw new Error(`failed to get ${cid}`)
        }

        // unpack File objects from the response
        const files = await res.files()
        for (const file of files) {
            //console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
            setFileCid(file.cid)
        }
    }

    useEffect(async () => {
        if (cid) await retrieve(cid);
    }, [cid]);

    return fileCid;
};
