import React from "react";
import {useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import styles from './foundUser.module.css'

export const FoundUser = () => {
    const userAvatar = useAppSelector<string>(state => state.users.user.avatar_url)
    const userName = useAppSelector<string>(state => state.users.user.name)
    const userNickname = useAppSelector<string>(state => state.users.user.login)
    const userFollowers = useAppSelector<number | null>(state => state.users.user.followers)
    const userFollowing = useAppSelector<number | null>(state => state.users.user.following)

    return (
        <section className={styles.foundUser_section}>
            <img className={styles.userAvatar} src={userAvatar} alt="User Avatar"/>
            <div className={styles.userInfo_block}>
                <span className={styles.userName}>{userName}</span>
                <span className={styles.userNickName}>{userNickname}</span>
                <div className={styles.followerInfo_block}>
                    <span className={styles.followers}>followers {userFollowers}</span>
                    <span className={styles.following}>following {userFollowing}</span>
                </div>
            </div>
        </section>
    )
}