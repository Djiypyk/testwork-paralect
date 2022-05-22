import React, {
    ChangeEvent,
    DetailedHTMLProps,
    FC,
    forwardRef,
    InputHTMLAttributes,
    memo,
    RefAttributes,
    useCallback,
    useState,
} from 'react'
import styles from './input.module.css'
import {EDebounceDelay} from "../../../enum/EDebounceDelay";
import {useDebounce} from "../../../hooks/useDebounce";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
type DebounceSearchFieldPropsType = DefaultInputPropsType &
    RefAttributes<HTMLInputElement> & {
    searchValue: (value: string) => void
}
export const DebounceSearchInput: FC<DebounceSearchFieldPropsType> = memo(
    forwardRef(({searchValue, ...restProps}, ref) => {
        const [value, setValue] = useState('')
        const search = (question: string): void => {
            searchValue(question)
        }
        const debounceSearch = useDebounce(search, EDebounceDelay.Input)
        const onSearchQuestionChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
            setValue(e.currentTarget.value)
            debounceSearch(e.currentTarget.value)
        }, [debounceSearch])
        return (
            <input

                className={styles.input}
                ref={ref}
                type="text"
                value={value}
                onChange={onSearchQuestionChange}
                {...restProps}
            />
        )
    }),
)
