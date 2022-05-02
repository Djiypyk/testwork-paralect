import React, {memo} from "react";
import styles from './header.module.css'
import githubIcon from '../../c1-main/common/assets/img/github.svg'
import {DebounceSearchInput} from "../../c1-main/components/input/DebounceSearchInput";
import {useAppDispatch} from "../../hooks/useAppDispatchAndSelector";
import {setUserInfoS} from "../../store/sagas/userSaga";
import {findUser} from "../../store/reducers/userReducer";

export const Header = memo(() => {
    const dispatch = useAppDispatch()
    const searchByUserName = (username: string) => {
        const userName = username.toLowerCase()
        dispatch(setUserInfoS(userName))
        dispatch(findUser(userName))
    }

    return (
        <div className={styles.header}>
            <img className={styles.img} src={githubIcon} alt="GitHub Icon"/>
            <DebounceSearchInput placeholder={'Enter GitHub username'} searchValue={searchByUserName}/>
        </div>
    )
})