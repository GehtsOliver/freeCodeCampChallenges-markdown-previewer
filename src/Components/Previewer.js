import React from 'react';
import marked from 'marked';
import "../App.css";
import "./Previewer.css";

marked.setOptions({
gfm: true,
breaks: true
})

const Previewer = props => {
    
  const markedText = marked(props.input);
    
    return(
        <article className="wrapper">
          <div className="header">
            <h1>Markdown Previewer</h1>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markedText}}></div>
        </article>
    );
}

export default Previewer;