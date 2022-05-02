import React from "react";
import styles from './header.module.css'
import githubIcon from '../../c1-main/common/assets/img/github.svg'
import {DebounceSearchInput} from "../../c1-main/components/input/DebounceSearchInput";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import {setUserInfoS} from "../../store/sagas/userSaga";
import {findUser, RequestStatusType} from "../../store/reducers/userReducer";
import {Loader} from "../../c1-main/common/loader/Loader";

export const Header = () => {
    const requestStatus = useAppSelector<RequestStatusType>(state => state.users.status)
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
            {requestStatus === 'loading' ? <Loader/> : ''}
        </div>
    )
}