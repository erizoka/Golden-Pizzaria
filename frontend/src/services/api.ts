import axios, {AxiosError} from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { error } from "console";

import { signOut } from "../contexts/AuthContext";

export function setupApiClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers:{
            Authorization: `Bearer: ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response?.status === 401){

            if(typeof window !== undefined){
                signOut();
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)

    })

    return api;
}