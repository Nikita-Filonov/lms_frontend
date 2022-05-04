import React, {FC, useCallback, useMemo, useState} from "react";
import {Editor} from "./Editor";
import debounce from 'lodash/debounce';
import {OutputData} from "@editorjs/editorjs";
import {saveHtmlEditorContent} from "../../../Utils/Helpers/Editor";
import {useCourses} from "../../../Providers/CoursesProvider";
import type {Course} from "../../../Utils/Models/Course";


type CourseEditorProps = {
  course: Course
}

export const CourseEditor: FC<CourseEditorProps> = ({course}) => {
  const {updateCourse} = useCourses();
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState(course.editorContent);

  const saveProperties = useCallback(async (editorData) => {
    setLoading(true);

    if (!course?.id) {
      return;
    }

    setTimeout(async () => {
      const htmlContent = saveHtmlEditorContent();
      await updateCourse({content: htmlContent, editorContent: editorData});
    }, 100);
  }, [editorContent]);

  const saveContent = useCallback(async (editorData: OutputData) => {
    const content = JSON.stringify(editorData);
    setEditorContent(content);
    await saveProperties(content);
  }, []);

  const saveContentDebounced = useMemo(() => debounce(saveContent, 3000), [saveContent]);

  return <Editor autoFocus={true} onChange={saveContentDebounced}/>;
};
