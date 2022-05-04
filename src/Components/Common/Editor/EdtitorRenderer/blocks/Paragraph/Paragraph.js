import {memo} from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Paragraph.module.scss'


export const Paragraph = memo(({data, className}) => {
  return <p className={cn(styles.paragraph, className)}>{parse(data.text)}</p>
})
