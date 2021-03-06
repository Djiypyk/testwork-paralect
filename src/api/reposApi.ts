import {instance} from "./config";
import {AxiosResponse} from "axios";
import {getRepoPayload} from "../types/RepoT";

export const reposApi = {
    getUserRepos: async (payload: Partial<getRepoPayload>) => {
        const {type = '', sort = '', page, per_page = 100, direction = '', username} = payload
        return await instance
            .get<AxiosResponse>(`users/${username}/repos?page=${page}}&per_page=${per_page}&type=${type}&sort=${sort}&direction=${direction}`)
    },
}

