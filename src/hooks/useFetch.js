import {useEffect, useState} from "react";
import {Web3Storage} from "web3.storage";
import rsc from '../rsc/recources.json';


const APIKEY = process.env.REACT_APP_WEB3_STORAGE_API;

const makeStorageClient = () => {
    return new Web3Storage({token: APIKEY})
}

const client = makeStorageClient()

export const useFetchCid = (cid) => {
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

export const useFetchImg = (name, size) => {
    switch (size){
        case 'sm':
            return rsc.rsc[0].small.find(obj => obj.name === name);
        case 'og':
            return rsc.rsc[0].original.find(obj => obj.name === name);
        default:
            return 'Not found.';
    }
}
