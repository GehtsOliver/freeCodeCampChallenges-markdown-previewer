import { useState } from "react";
import "./App.css";

import Previewer from "./Components/Previewer";
import Editor from "./Components/Editor";

const App = () => {
  const [input, changeInput] = useState(defaultText)

  const inputHandler = (e) => {
    changeInput(e.target.value);
    // console.log(input);
  };

  const clearContent = () => {
    changeInput("");
  }

  return (
    <div className="App">
      <section className="container">
        <Editor input={input} inputHandler={inputHandler} clearContent={clearContent}/>
      </section>
      <section className="container">
        <Previewer input={input} />
      </section>
      <div id="line"/>
    </div>
  );
};

const defaultText = `# Welcome to my React Markdown Previewer FCC-Project!

## You can type markdown in the left window in order to make it appear as html in the right one.

### This, for instance, is an h3 element. See, it is smaller in comparison to the h1 and h2 above this line.

This is just a simple p tag. A paragraph. This is the default tag.

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Visit my Github profile](https://avatars0.githubusercontent.com/u/64855110?s=400&u=c06e2daf2fab8a63193ac9fca6335df72e249dd3&v=4)
`;

export default App;
