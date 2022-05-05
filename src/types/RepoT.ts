export type RepoT = {
    id: number
    name: string
    full_name: string
    html_url: string
    description: null | string,
}

export type getRepoPayload = {
    username: string
    type: string
    sort: string
    direction: string
    per_page: number
    page: number
}