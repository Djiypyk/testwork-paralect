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
            console.log(e as AxiosError)
            // return (e as AxiosError) || 'some error'
        }
    },
}
