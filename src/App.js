import './App.css';
import Bar from './components/Bar/Bar';
import InputField from './components/InputField/InputField';



function App() {
  return (
    <div className="App">
     <Bar zIndex='modal' position='absolute'/>
     <InputField />
    </div>
  );
}

export default App;
