import logo from "./logo.svg";
import "./App.css";
import Products from "./components/products";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Container from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
    </div>
  );
}

export default App;