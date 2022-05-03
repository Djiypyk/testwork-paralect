import {instance} from "./config";

export const userApi = {
    getUser: async (username: string) => {
        return await instance.get(`users/${username}`)
    },
}