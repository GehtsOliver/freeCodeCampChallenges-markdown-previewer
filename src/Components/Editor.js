import React from "react";
import "./Editor.css";

const Editor = (props) => {
  return (
    <article className="wrapper wrapper-left">
      <div className="header">
        <h1>Markdown input</h1>
        <button onClick={props.clearContent} id="erase-btn">
          CLEAR
        </button>
      </div>
      <textarea
        type="text"
        id="editor"
        onChange={props.inputHandler}
        placeholder="Type text here"
        value={props.input}
      ></textarea>
    </article>
  );
};

export default Editor;
