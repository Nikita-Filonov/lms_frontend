import {memo} from 'react'
import cn from 'classnames'
import Highlight from 'react-highlight'
import styles from './CodeBox.module.scss'

export const CodeBox = memo(({data, className}) => {
  return (
    <>
      <link rel="stylesheet" href={data.theme}/>
      {/* @ts-ignore */}
      <Highlight className={cn(styles.codeBox, className)} innerHTML={true}>
        {data.code}
      </Highlight>
    </>
  )
})
