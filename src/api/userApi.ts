import {instance} from "./config";
import {UserT} from "../types/UserT";

export const userApi = {
    getUser: async (username: string) => {
        return await instance.get<UserT>(`users/${username}`)
    },
}