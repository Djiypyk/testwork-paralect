import React from 'react';
import styles from './App.module.css';
import {Header} from "./c2-feauters/header/Header";
import {EmptyPage} from "./c2-feauters/emptyPage/EmptyPage";
import {useAppSelector} from "./hooks/useAppDispatchAndSelector";
import {FoundUser} from "./c2-feauters/foundUser/FoundUser";
import searchIcon from './c1-main/common/assets/img/bigSearchSvg.svg'
import noUserIcon from './c1-main/common/assets/img/NotUser.svg'


export const App = () => {
    const userInfo = useAppSelector<string | null>(state => state.users.user.login)
    const findUser = useAppSelector<string>(state => state.users.findName)
    const error = useAppSelector<boolean>(state => state.users.errorUser)


    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.app_container}>
                {!error
                    ? (findUser && userInfo)
                        ? <FoundUser/>
                        : <EmptyPage img={searchIcon} descriptions={'Start with searching a GitHub user'}/>
                    : <EmptyPage img={noUserIcon} descriptions={'User not found'}/>
                }


            </div>
        </div>);
}
