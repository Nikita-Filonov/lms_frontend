import {FC, memo} from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './List.module.scss'

type Content = {
  items: string[]
  style?: 'ordered' | 'unordered'
}

type ListProps = {
  data: Content
  className?: string
}

export const List: FC<ListProps> = memo(({data, className}) => {
  // @ts-ignore
  const ListItem = ({text}) => <li>{parse(text)}</li>
  const list = data.items.map((item, index) => <ListItem text={item} key={index}/>)

  if (data.style === 'ordered') {
    return <ol className={cn(styles.list, className)}>{list}</ol>
  }

  return <ul className={cn(styles.list, className)}>{list}</ul>
})
