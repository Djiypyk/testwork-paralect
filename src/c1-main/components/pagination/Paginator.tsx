import React, {FC, memo} from 'react';
import styles from "./paginator.module.css";


export type PaginationPropsType = {
    reposPerPage: number
    totalRepos: number
    currentPage: number
    handlerPaginate: (value: number) => void
    handlerNextPage: () => void
    handlerPrevPage: () => void
    firstRepoIndex: number
    lastRepoIndex: number
}

export const Pagination: FC<PaginationPropsType> = memo(({
                                                             reposPerPage,
                                                             totalRepos,
                                                             handlerPaginate,
                                                             handlerPrevPage,
                                                             handlerNextPage,
                                                             currentPage,
                                                             firstRepoIndex,
                                                             lastRepoIndex,
                                                         }) => {

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
            pageNumbers.push(i)
        }

        return (
            <div className={styles.paginationWrapper}>
                <div className={styles.paginationInfo}>
                    {firstRepoIndex + 1}-{lastRepoIndex} of {totalRepos} items
                </div>
                <button disabled={currentPage === 1} onClick={handlerPrevPage}>
                    <span className={styles.paginationIconLeft}>&lt;</span>
                </button>
                {
                    pageNumbers.map(number => {
                        return (
                            <div key={number} className={styles.paginationDivItems}>
                        <span className={styles.paginationItems}
                              onClick={() => handlerPaginate(number)}>{number}</span>
                            </div>
                        )
                    })
                }
                <button disabled={currentPage === pageNumbers.length} onClick={handlerNextPage}>
                    <span className={styles.paginationIconRight}>&gt;</span>
                </button>
            </div>
        );
    }
)