import React from 'react';
import styles from './App.module.css';
import {Header} from "./c2-feauters/header/Header";
import {StartPage} from "./c2-feauters/startPage/StartPage";
import {useAppSelector} from "./hooks/useAppDispatchAndSelector";
import {FoundUser} from "./c2-feauters/foundUser/FoundUser";


export const App = () => {
    const userInfo = useAppSelector<string | null>(state => state.users.user.name)
    return (
        <div className={styles.App}>
            <Header/>
            {/*{userInfo ? <FoundUser/> : <StartPage/>}*/}
            <FoundUser/>


        </div>);
}
