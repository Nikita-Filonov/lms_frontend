import {memo} from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import dompurify from 'dompurify'
import styles from './Raw.module.scss'


export const Raw = memo(({data, className}) => {
  return <div className={cn(styles.raw, className)}>{parse(dompurify.sanitize(data.html))}</div>
})
