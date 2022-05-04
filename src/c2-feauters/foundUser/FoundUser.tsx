import React, {FC, useCallback, useEffect, useState} from "react";
import styles from './foundUser.module.css'
import {RepoTable} from "../repoTable/RepoTable";
import {UserInfo} from "./userInfo/UserInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import {Pagination} from "../../c1-main/components/pagination/Paginator";
import {paginationChange} from "../../store/reducers/reposReducer";
import {serUserReposS} from "../../store/sagas/reposSaga";
import {RepoT} from "../../types/RepoT";

export const FoundUser: FC = () => {
    const repos = useAppSelector<RepoT[]>(state => state.repos.repos)
    const login = useAppSelector<string>(state => state.users.user.login)
    const reposSizeForPage = useAppSelector<number>(state => state.repos.repoSizePerPage)
    const currentPageState = useAppSelector<number>(state => state.repos.currentPage)
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState<number>(currentPageState);


    const lastRepoIndex: number = currentPage * reposSizeForPage;
    const firstRepoIndex: number = lastRepoIndex - reposSizeForPage;
    const currentRepo: RepoT[] = repos.length ? repos.slice(firstRepoIndex, lastRepoIndex) : [];
    useEffect(() => {
        dispatch(serUserReposS({username: login}))
    }, [dispatch, login])
    const handlerPaginate = useCallback((pageNumber: number): void => {
        setCurrentPage(pageNumber)
        dispatch(paginationChange(pageNumber))
    }, [dispatch])
    const handlerNextPage = useCallback((): void => {
        setCurrentPage(prev => prev + 1)
        dispatch(paginationChange(currentPage))
    }, [dispatch, currentPage])
    const handlerPrevPage = useCallback((): void => {
        setCurrentPage(prev => prev - 1)
        dispatch(paginationChange(currentPage))
    }, [dispatch, currentPage])

    return (
        <div className={styles.foundUser_wrapper}>
            <div className={styles.foundUser_block}>
                <UserInfo/>
                <RepoTable repos={currentRepo}/>
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