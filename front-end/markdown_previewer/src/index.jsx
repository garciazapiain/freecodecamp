import React from 'react';
import ReactDOM from 'react-dom';
import './index.html';


let marked = require('marked')
marked.setOptions({
    breaks: true
  })
let placeholder = `# Welcome to my React Markdown Previewer! 
## This is a sub-heading...
[Click away](https://www.youtube.com/watch?v=1j-jiQ9mqek) 🤙
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
> Block Quotes!
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)


`;
class Text extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        textPreview : placeholder
      }
      this.changeHandler = this.changeHandler.bind(this);
    }
    
    changeHandler(e){
        event.preventDefault()
        this.setState({textPreview: e.target.value})
      }

    
    render() {
      return(
        <div>
          <textarea value = {this.state.textPreview} onChange={this.changeHandler}  id="editor"></textarea>
          <div id="preview" dangerouslySetInnerHTML = {{__html:marked(this.state.textPreview)}}>
          </div>
        </div>
      )
    }
  }
  ReactDOM.render(<Text/>, document.getElementById('app'));