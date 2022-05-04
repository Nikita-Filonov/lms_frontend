import {memo} from 'react'
import cn from 'classnames'
import styles from './Code.module.scss'

export const Code = memo(({data, className}) => {
  return (
    <pre className={cn(styles.code, className)}>
      <code>{data.code}</code>
    </pre>
  )
})
