import React, {FC, memo} from "react";
import styles from './emptyPage.module.css'
type StartPagePropT = {
    img: string
    descriptions: string
}

export const EmptyPage: FC<StartPagePropT> = memo(({img, descriptions}) => {

    return (
        <div className={styles.startPage}>
            <div className={styles.startPage_resultBlock}>
                <img src={img} alt="Big Search Icon"/>
                <span>{descriptions}</span>
            </div>
        </div>
    )
})