import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Warning from '@editorjs/warning';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Codebox from '@bomdi/codebox';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import Paragraph from 'editorjs-paragraph-with-alignment';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';

export const EDITOR_JS_TOOLS = {
  embed: {
    class: Embed,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    // tunes: ['alignmentTune'],
    inlineToolbar: true,
  },
  marker: Marker,
  warning: {
    class: Warning,
    inlineToolbar: true,
  },
  linkTool: LinkTool,
  image: {
    class: Image,
  },
  header: {
    class: Header,
    tunes: ['alignmentTune'],
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  // checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  codeBox: Codebox,
  raw: Raw,
  simpleImage: SimpleImage,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  alignmentTune: {
    class: AlignmentTuneTool,
    config: {
      default: 'left',
    },
  },
}
