import {UserT} from "../types/UserT";
import {
    findUser,
    initialState,
    RequestStatusType,
    setUserInfo,
    userReducer
} from "../store/reducers/userReducer";

test('The user they are looking for must be', () => {
    const startState: typeof initialState = {
        status: 'idle' as RequestStatusType,
        errorUser: false,
        findName: '',
        user: {} as UserT,
    };
    const newStatus: string = 'Djiypyk'
    const action = findUser(newStatus);

    const endState = userReducer(startState, action)


    expect(endState.findName).toBe(newStatus);
    expect(endState.findName).toBeDefined();
});

test('user should be stacked in state', () => {
    const startState: typeof initialState = {
        status: 'idle' as RequestStatusType,
        errorUser: false,
        findName: '',
        user: {} as UserT,
    };
    const user: UserT = {
        login: 'Djiypyk',
        name: 'Mikalai Zarazaka',
        following: 11,
        followers: 12,
        html_url: 'https://github.com/Djiypyk',
        id: 42,
        avatar_url: 'https://avatars.githubusercontent.com/u/81639108?v=4'
    }

    const action = setUserInfo(user);
    const endState = userReducer(startState, action)

    expect(endState.user.login).toBe('Djiypyk');
    expect(endState.user.id).toBe(42);
    expect(endState.user.followers).toBe(12);
});

