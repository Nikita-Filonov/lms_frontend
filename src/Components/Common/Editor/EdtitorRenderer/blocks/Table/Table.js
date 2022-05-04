import {useMemo} from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Table.module.scss'


export const Table = ({data, className}) => {
  const rows = useMemo(
    () => (!data?.withHeadings ? data.content : data.content.filter((item, index) => index !== 0)),
    [data],
  )

  return (
    <table className={cn(styles.table, className)}>
      {data.withHeadings && data.content[0]?.length && (
        <thead>
        <tr>
          {data.content[0].map((th, thIndex) => (
            <th key={thIndex}>{parse(th)}</th>
          ))}
        </tr>
        </thead>
      )}
      <tbody>
      {rows.map((tr, trIndex) => (
        <tr key={trIndex}>
          {tr.map((td, tdIndex) => (
            <td key={tdIndex}>{parse(td)}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
