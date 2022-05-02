import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.github.com/',
})


export const userApi = {
    getUser: async (username: string) => {
        return await instance.get(`users/${username}`)

    },
    getUserRepos: async (username: string) => {
        // const res = await instance.get(`users/${username}/repos?per_page=4&page=${page}`)
        return await instance.get(`users/${username}/repos`)
    }
}

// type getRepoPayload = {
//     per_page: number
//     page: number
// }