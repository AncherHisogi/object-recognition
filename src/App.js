import React, {Component} from 'react';
import './App.css';
import Bar from './components/Bar/Bar';
import InputField from './components/InputField/InputField';




class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value)
  }

  onSearch = () =>{
    console.log('click')
  }

  render(){
    return (
      <div className="App">
        <Bar zIndex='modal' position='absolute'/>
        <InputField onInputChange={this.onInputChange} onSearch={this.onSearch}/>
      </div>
    );
  }
}

export default App;
