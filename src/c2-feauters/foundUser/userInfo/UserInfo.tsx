import React, {useEffect} from "react";
import styles from './userInfo.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/useAppDispatchAndSelector";
import {serUserReposS} from "../../../store/sagas/userSaga";
import {UserT} from "../../../types/UserT";

export const UserInfo = () => {
    const {login, name, followers, following, avatar_url, html_url} = useAppSelector<UserT>(state => state.users.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(serUserReposS(login))
    }, [dispatch, login])
    const convertFunc = (value: any) => {
        return value > 1000 ? `${value / 1000}k` : value
    }

    return (
        <section className={styles.foundUser_section}>
            <img className={styles.userAvatar} src={avatar_url} alt="User Avatar"/>
            <div className={styles.userInfo_block}>
                <span className={styles.userName}>{name}</span>
                <a href={html_url} target={'_blank'} rel="noreferrer" className={styles.userNickName}>{login}</a>
                <div className={styles.followerInfo_block}>
                    <span className={styles.followers}>{convertFunc(followers)} followers</span>
                    <span className={styles.following}>{convertFunc(following)} following </span>
                </div>
            </div>
        </section>
    )
}