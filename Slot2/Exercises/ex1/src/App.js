import logo from './logo.svg';
import './App.css';

function App() {
  //khai báo 1 biến tên name và gán giá trị "Tuyết"
  const name = "Tuyết";
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <p>Hello, {name}!</p>
      </header>
    </div>
  );
}

export default App;
