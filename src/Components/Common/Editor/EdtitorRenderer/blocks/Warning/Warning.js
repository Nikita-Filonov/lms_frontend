import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Warning.module.scss'


export const Warning = ({data, className}) => {
  return (
    <dl className={cn(styles.warning, className)}>
      <dt className={styles.name}>{parse(data.title)}</dt>
      <dd className={styles.message}>{parse(data.message)}</dd>
    </dl>
  )
}
