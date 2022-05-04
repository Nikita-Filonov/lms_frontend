import {memo} from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Quote.module.scss'


export const Quote = memo(({data, className}) => {
  return (
    <figure className={cn(styles.quote, className)}>
      <blockquote className={styles.blockquote}>{parse(data.text)}</blockquote>
      <figcaption className={styles.caption}>
        <cite>{parse(data.caption)}</cite>
      </figcaption>
    </figure>
  )
})
