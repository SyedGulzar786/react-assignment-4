import './App.css';
import Button from '@mui/material/Button';
import Home from './pages/home';

function App() {
  const arr = ["one", "two", "three"];
  const getData = (data) => console.log("parent-->", data);
  return (
    <div>
      <section className="container">
        <div>
          <h1>hello world</h1>
          <Button variant="contained">Contained</Button>
        </div>
        <div>
          <Home arr={arr} getData={getData}/>
        </div>
      </section>
    </div>
  );
}

export default App;
