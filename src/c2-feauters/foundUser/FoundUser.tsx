import React from "react";
import styles from './foundUser.module.css'
import {RepoTable} from "../repoTable/RepoTable";
import {UserInfo} from "./userInfo/UserInfo";


export const FoundUser = () => {


    return (
        <div className={styles.foundUser_wrapper}>
            <UserInfo/>
            <RepoTable/>
        </div>
    )
}