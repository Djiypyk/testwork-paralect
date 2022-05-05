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

        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
            pageNumbers.push(i)
        }
        const numberItem = pageNumbers.map((number) => {
            if (number === Math.min(...pageNumbers) || number === Math.max(...pageNumbers)) {
                return <div key={number}
                            onClick={() => handlerPaginate(number)}
                            className={number === currentPage
                                ? `${styles.paginationDivItems} ${styles.paginationDivItems_Active}`
                                : styles.paginationDivItems}>
                    <span className={styles.paginationItems}>{number}</span>
                </div>
            } else if (number === currentPage || number === currentPage - 1 || number === currentPage + 1) {
                return <div key={number}
                            onClick={() => handlerPaginate(number)}
                            className={number === currentPage
                                ? `${styles.paginationDivItems} ${styles.paginationDivItems_Active}`
                                : styles.paginationDivItems}>
                    <span className={styles.paginationItems}>{number}</span>
                </div>
            } else if (number === currentPage - 2 || number === currentPage + 2) {
                return <div>...</div>
            } else {
                return null
            }
        })
        return (
            <div className={styles.paginationWrapper}>
                <div className={styles.paginationInfo}>
                    {firstRepoIndex + 1}-{lastRepoIndex} of {totalRepos} items
                </div>
                <button disabled={currentPage === 1} onClick={handlerPrevPage}>
                    <span className={styles.paginationIcon}>&lt;</span>
                </button>
                {
                    numberItem
                }
                <button disabled={currentPage === pageNumbers.length} onClick={handlerNextPage}>
                    <span className={styles.paginationIcon}>&gt;</span>
                </button>
            </div>
        );
    }
)