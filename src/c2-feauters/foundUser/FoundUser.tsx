import React, {useState} from "react";
import styles from './foundUser.module.css'
import {RepoTable} from "../repoTable/RepoTable";
import {UserInfo} from "./userInfo/UserInfo";
import {useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import {Pagination} from "../../c1-main/components/pagination/Paginator";
import {RepoT} from "../../types/RepoT";


export const FoundUser = () => {
    const repos = useAppSelector(state => state.users.repos)

    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(4);
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const currentRepo: RepoT[] = repos.length ? repos.slice(firstRepoIndex, lastRepoIndex) : [];

    const handlerPaginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    const handlerNextPage = () => {
        setCurrentPage(prev => prev + 1)
    }
    const handlerPrevPage = () => {
        setCurrentPage(prev => prev - 1)
    }

    return (
        <div className={styles.foundUser_wrapper}>
            <div className={styles.foundUser_block}>
                <UserInfo/>
                <RepoTable/>
            </div>
            <div className={styles.foundUser_paginator}>
                <Pagination reposPerPage={reposPerPage}
                            totalRepos={repos.length}
                            handlerPaginate={handlerPaginate}
                            handlerNextPage={handlerNextPage}
                            handlerPrevPage={handlerPrevPage}
                            currentPage={currentPage}
                            firstRepoIndex={firstRepoIndex}
                            lastRepoIndex={lastRepoIndex}
                />
            </div>
        </div>
    )
}