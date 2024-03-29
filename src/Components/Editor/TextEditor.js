import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";


export const TextEditor = ({label, fieldName,  onChangeHandler, resetCounter, defaultValue}) => {
  
    const [editorDefaultValue, setEditorDefaultValue] = useState(defaultValue?defaultValue:"<p></p>");
    useEffect(() => {
      console.log("triggering useEffect from texteditor++++++++");
      console.log(defaultValue);
      setEditorDefaultValue(defaultValue);
    }, [resetCounter])
    

    var modules = {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
      };

      var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
      ];


    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <div className="mb-3">
            <ReactQuill
                style={{ height: "200px" }}
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder="write description ...."
                onChange={onChangeHandler}
                value={editorDefaultValue}
                >
            </ReactQuill>
            </div>
        </Form.Group>

      );
}
