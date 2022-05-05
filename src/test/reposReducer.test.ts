import {initialState, paginationChange, reposReducer, setRepos} from "../store/reducers/reposReducer";
import {RepoT} from "../types/RepoT";

test('The user they are looking for must be', () => {
    const startState: typeof initialState = {
        repos: [] as RepoT[],
        currentPage: 1,
        repoSizePerPage: 4,
    };
    const newStatus: RepoT[] = [{
        id: 42,
        name: 'Test-Work',
        full_name: 'Test-Work-Paralect',
        html_url: 'https://github.com/Djiypyk/testwork-paralect',
        description: 'This is test work for summer startup 2022',
    }]
    const action = setRepos(newStatus);

    const endState = reposReducer(startState, action)


    expect(endState.repos[0].id).toBe(42);
    expect(endState.repos[0].name).toBe('Test-Work');
    expect(endState.repos[0]).toBeDefined();
});

test('user should be stacked in state', () => {
    const startState: typeof initialState = {
        repos: [] as RepoT[],
        currentPage: 1,
        repoSizePerPage: 4,
    };
    const page: number = 2

    const action = paginationChange(page);
    const endState = reposReducer(startState, action)

    expect(endState.currentPage).toBe(2);
});

