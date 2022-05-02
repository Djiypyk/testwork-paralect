import axios, {AxiosError} from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.github.com/',
})


export const userApi = {
    getUser: async (username: string) => {
        try {
            const res = await instance.get(`users/${username}`)
            return res.data
        } catch (e) {
            return 'some error'
        }
    },
    getUserRepos: async (username: string) => {
        try {
            const res = await instance.get(`users/${username}/repos`)
            return res.data
        } catch (e) {
            return 'some error'
        }
    }
}
