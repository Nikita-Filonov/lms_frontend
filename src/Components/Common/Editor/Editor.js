import React, {useCallback, useRef} from "react";
import {createReactEditorJS} from "react-editor-js";
import {EDITOR_JS_TOOLS} from "../../../Utils/Constants/Editor";

const ReactEditorJS = createReactEditorJS();

export const Editor = ({autoFocus, onChange, editorData}) => {
  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance
  }, []);

  const handleSave = useCallback(async () => {
    if (!editorCore.current) {
      return;
    }

    const savedData = await editorCore.current.save();
    onChange(savedData);
  }, [onChange]);

  return (
    <ReactEditorJS
      holder={'editorHolder'}
      tools={EDITOR_JS_TOOLS}
      autoFocus={autoFocus}
      onInitialize={handleInitialize}
      onChange={handleSave}
      defaultValue={editorData}
    />
  )
};
