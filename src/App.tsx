import React from 'react';
import styles from './App.module.css';
import {Header} from "./c2-feauters/header/Header";
import {StartPage} from "./c2-feauters/startPage/StartPage";
import {useAppSelector} from "./hooks/useAppDispatchAndSelector";
import {FoundUser} from "./c2-feauters/foundUser/FoundUser";
import searchIcon from './c1-main/common/assets/img/bigSearchSvg.svg'
// import noUserIcon from './c1-main/common/assets/img/NotUser.svg'


export const App = () => {
    const userInfo = useAppSelector<string | null>(state => state.users.user.name)
    const findUser = useAppSelector<string>(state => state.users.findName)
    const error = useAppSelector<string>(state => state.users.error)


    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.app_container}>
                {findUser && userInfo ? <FoundUser/> :
                    <StartPage img={searchIcon} descriptions={'Start with searching a GitHub user'}/>}
                {/*{error && <StartPage img={noUserIcon} descriptions={'User not found'}/>}*/}
            </div>


        </div>);
}
