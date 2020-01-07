import React from 'react'   
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true,
        tweets:[],
        random:1,
        randomColor:0,
        colors:['blue','lightBlue','grey','lighGrey','coral','aqua']
        }
        this.newQuote = this.newQuote.bind(this);
      }
   
    
     componentDidMount() {
        this.setState({loading: true})
        this.setState({randomColor:[Math.floor(Math.random() * this.state.colors.length)]})
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

      newQuote() {
        this.setState({loading: true}),
        this.setState({randomColor:[Math.floor(Math.random() * this.state.colors.length)]})
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
        const mainStyle={
          backgroundColor: this.state.colors[this.state.randomColor],
          height: '100%',
          textAlign:'center',
          alignContent:'center'
        };
        return (
          <div style={mainStyle}>
            {this.state.loading ? <h1>Page Loading...</h1> :
            <div id="quote-box">
              <div id="text">
                <div>
                    <h1>{this.state.tweet[this.state.random].quote}</h1>
                </div>
                <div id="author">
                  <h3>{this.state.tweet[this.state.random].author}</h3>
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