//using functional component in our code
//use path of your functional component code while importing
import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';

function App() {
  return (

<div className='app'>
  <h1>Hello I am Ritika Das</h1>
  <FunctionalComponent/> {/*using functional component and showing its reusability*/}
  <FunctionalComponent/>
  <FunctionalComponent/>
  <FunctionalComponent/>
  </div>
    );
  }


export default App;
