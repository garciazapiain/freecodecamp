import React from 'react'   
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true,
        tweets:[],
        random:1
        }
        this.newQuote = this.newQuote.bind(this);
      }
   
     componentDidMount() {
        this.setState({loading: true})
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(data => {
                console.log(data.quotes)
                console.log(data.quotes.length)
                console.log ([Math.floor(Math.random() * data.quotes.length)])
                this.setState({
                    random: [Math.floor(Math.random() * data.quotes.length)],
                    loading: false,
                    tweet: data.quotes
                })
         })
      }

      newQuote() {
        this.setState({loading: true})
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    random: [Math.floor(Math.random() * data.quotes.length)],
                    loading: false,
                    tweet: data.quotes
                })
         })
      }
      render () { 
        return (
          <div>
            {this.state.loading ? <h1>Page Loading...</h1> :
            <div id="quote-box">
              <div id="text">
                <div>
                    <h1>{this.state.tweet[this.state.random].quote}</h1>
                </div>
                <div id="author">
                  <h4>{this.state.tweet[this.state.random].author}</h4>
                 </div>
                <div id="new-quote">
                  <button onClick={this.newQuote}>New quote</button>
                </div>
                <div>
                  <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet quote</a>
                </div>
              </div>
          </div>
         }
         </div>
        )
      }
   }


  
  
export default App;