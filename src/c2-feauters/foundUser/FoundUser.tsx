import React, {useEffect, useState} from "react";
import styles from './foundUser.module.css'
import {RepoTable} from "../repoTable/RepoTable";
import {UserInfo} from "./userInfo/UserInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import {Pagination} from "../../c1-main/components/pagination/Paginator";
import {paginationChange} from "../../store/reducers/reposReducer";
import {serUserReposS} from "../../store/sagas/reposSaga";

export const FoundUser = () => {
    const repos = useAppSelector(state => state.repos.repos)
    const login = useAppSelector(state => state.users.user.login)
    const reposSizeForPage = useAppSelector(state => state.repos.repoSizeForPage)
    const currentPageState = useAppSelector(state => state.repos.currentPage)
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState<number>(currentPageState);
    const lastRepoIndex = currentPage * reposSizeForPage;
    const firstRepoIndex = lastRepoIndex - reposSizeForPage;
    // const currentRepo: RepoT[] = repos.length ? repos.slice(firstRepoIndex, lastRepoIndex) : [];
    useEffect(() => {
        dispatch(serUserReposS({username: login, page: currentPage}))
    }, [dispatch, login, currentPage])
    const handlerPaginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        dispatch(paginationChange(pageNumber))
    }
    const handlerNextPage = () => {
        setCurrentPage(prev => prev + 1)
        dispatch(paginationChange(currentPage))

    }
    const handlerPrevPage = () => {
        setCurrentPage(prev => prev - 1)
        dispatch(paginationChange(currentPage))
    }

    return (
        <div className={styles.foundUser_wrapper}>
            <div className={styles.foundUser_block}>
                <UserInfo/>
                <RepoTable/>
            </div>
            <div className={styles.foundUser_paginator}>
                <Pagination reposPerPage={reposSizeForPage}
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