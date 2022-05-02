import React, {memo} from "react";
import styles from './startPage.module.css'
import searchIcon from '../../c1-main/common/assets/img/bigSearchSvg.svg'
import noUserIcon from '../../c1-main/common/assets/img/NotUser.svg'
import {useAppSelector} from "../../hooks/useAppDispatchAndSelector";

export const StartPage = memo(() => {
    const findUser = useAppSelector<string>(state => state.users.findName)
    return (
        <div className={styles.startPage}>
            {findUser === ''
                ? <div className={styles.startPage_resultBlock}>
                    <img src={searchIcon} alt="Big Search Icon"/>
                    <span>Start with searching a GitHub user</span>
                </div>
                : <div className={styles.startPage_resultBlock}>
                    <img src={noUserIcon} alt="Big Search Icon"/>
                    <span>User not found</span>
                </div>}


        </div>
    )
})