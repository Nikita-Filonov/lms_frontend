import styles from './EdtitorRenderer.module.scss'
import {FC} from "react";
import {Header} from "./blocks/Header/Header";
import {Paragraph} from "./blocks/Paragraph/Paragraph";
import List from "@mui/material/List";
import {Table} from "./blocks/Table/Table";
import {Quote} from "./blocks/Quote/Quote";
import {Warning} from "./blocks/Warning/Warning";
import {Code} from "./blocks/Code/Code";
import {CodeBox} from "./blocks/CodeBox/CodeBox";
import {Raw} from "./blocks/Raw/Raw";
import {Image} from "./blocks/Image/Image";
import {Embed} from "./blocks/Embed/Embed";
import {Delimiter} from "./blocks/Delimiter/Delimiter";
import {OutputData} from "@editorjs/editorjs";

type EdtitorRendererProps = {
  data: OutputData
}

export const EditorRenderer: FC<EdtitorRendererProps> = ({data}) => {
  if (!data?.blocks) return null

  return (
    <div className={styles.renderer}>
      {data.blocks.map((block) => {
        switch (block.type.toLowerCase()) {
          case 'header':
            return <Header data={block.data} className={styles[block.tunes?.anyTuneName?.alignment]} key={block.id}/>

          case 'paragraph':
            return <Paragraph data={block.data} className={styles[block.data.alignment]} key={block.id}/>

          case 'list':
            return <List data={block.data} className={styles[block.tunes?.anyTuneName?.alignment]} key={block.id}/>

          case 'table':
            return <Table data={block.data} key={block.id}/>

          case 'quote':
            return <Quote data={block.data} className={styles[block.data.alignment]} key={block.id}/>

          case 'warning':
            return <Warning data={block.data} key={block.id}/>

          case 'code':
            return <Code data={block.data} key={block.id}/>

          case 'codebox':
            return <CodeBox data={block.data} key={block.id}/>

          case 'raw':
            return <Raw data={block.data} key={block.id}/>

          case 'image':
            return <Image data={block.data} key={block.id}/>

          case 'embed':
            return <Embed data={block.data} key={block.id}/>

          case 'delimiter':
            return <Delimiter key={block.id}/>

          default:
            return null
        }
      })}
    </div>
  )
}
