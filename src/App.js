import React, {Component} from 'react';
import './App.css';
import Bar from './components/Bar/Bar';
import InputField from './components/InputField/InputField';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onSearch = () =>{
    this.setState({imageUrl: this.state.input})
    console.log('click')
  }

  render(){
    return (
      <div className="App">
        <Bar zIndex='modal' position='absolute'/>
        <InputField onInputChange={this.onInputChange}
                    onSearch={this.onSearch}
                    imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
