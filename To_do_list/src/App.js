// import logo from './logo.svg';
import './App.css';
import Product from './components/props';
import Greeting from './components/propsfunction';
import Counter from './components/state';
import MyComponent from './components/events';
import Statement from './components/ifstatement';
import ToDo from './components/todolist';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Product name="Laptop" price={800} /> */}
      {/* <Product name="Smartphone" price={400} /> */}

      <Greeting name="Raghad" />
      {/* <Greeting name="Bob" /> */}

      {/* <Counter  /> */}
      
      {/* <MyComponent  /> */}
      {/* <Statement  /> */}
      <ToDo  />

    </div>

  );
}

export default App;
