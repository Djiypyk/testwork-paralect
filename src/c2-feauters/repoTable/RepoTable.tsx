import React, {FC} from "react";
import {EmptyPage} from "../emptyPage/EmptyPage";
import noRepo from '../../c1-main/common/assets/img/repoIsEmpty.svg'
import styles from './repoTable.module.css'
import {useAppSelector} from "../../hooks/useAppDispatchAndSelector";
import {RepoT} from "../../types/RepoT";

type RepoTableT = {
    repos: RepoT[]
}

export const RepoTable: FC<RepoTableT> = ({repos}) => {
    const reposLength = useAppSelector<number>(state => state.repos.repos.length)

    const repoCard = repos.map(r => {
        return <div className={styles.table_repo_card} key={r.id}>
            <a href={r.html_url} target={'_blank'} rel='noreferrer'>{r.name}</a>
            <span>{r.description}</span>
        </div>
    })
    return (
        <div className={styles.repoTable}>
            {reposLength < 1
                ? <EmptyPage img={noRepo} descriptions={'Repository list is empty'}/>
                : <section>
                    <span className={styles.table_title}>Repositories ({reposLength})</span>
                    {repoCard}
                </section>
            }
        </div>
    )
}