import React, {FC, memo} from "react";
import styles from './startPage.module.css'
type StartPagePropT = {
    img: string
    descriptions: string
}

export const StartPage: FC<StartPagePropT> = memo(({img, descriptions}) => {

    return (
        <div className={styles.startPage}>
            <div className={styles.startPage_resultBlock}>
                <img src={img} alt="Big Search Icon"/>
                <span>{descriptions}</span>
            </div>
        </div>
    )
})