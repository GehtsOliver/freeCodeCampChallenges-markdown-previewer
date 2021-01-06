import { useState } from "react";
import "./App.css";

import Previewer from "./Components/Previewer";
import Editor from "./Components/Editor";

const App = () => {
  const [input, changeInput] = useState(defaultText);

  const inputHandler = (e) => {
    changeInput(e.target.value);
    // console.log(input);
  };

  const clearContent = () => {
    changeInput("");
  };

  return (
    <div className="App">
      <section className="container">
        <Editor
          input={input}
          inputHandler={inputHandler}
          clearContent={clearContent}
        />
      </section>
      <section className="container">
        <Previewer input={input} />
      </section>
      <div id="line" />
    </div>
  );
};

const defaultText = `# Welcome to my React Markdown Previewer FCC-Project!

![Visit my Github profile](https://avatars0.githubusercontent.com/u/64855110?s=400&u=c06e2daf2fab8a63193ac9fca6335df72e249dd3&v=4)

## My name is Olli and I am a rookie JavaScript developer.

This, is my representation of the 3rd _**FCC Front End Libraries Certification**_

The project is called the ~~Markup Backviewer~~. Nooooo, wait. It's called the __**Markdown Previewer!**__

The goal of a markup previewer is to display the input text on the left side in an html format.



Which is why I am also able to include \`<div> Code </div>\` in this window.

You can also include multiline code:

\`\`\`
function likeOlli(doILikeOlli) {
  if (likeOlli) {
      thumbsUp();
    return alert("Thank you for liking me!");
    else{
      return window.close();
    }
  }
}
\`\`\`


> Pastimes

My favourite pastimes these days are:
1. Coding
1. Studying(IT-related stuff of course)
1. Enjoying a sunbath near some waters
1. Drinking coffee :-)

If you like my content, make sure to give my personal site [olivergraetz.com](https://www.olivergraetz.com) a visit 
`;

export default App;
