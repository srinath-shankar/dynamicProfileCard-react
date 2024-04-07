import { Header_component } from "./components/Header_component";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Card } from "./components/Card";
// import { Inputform } from "./components/Inputform";



function App() {
  return (
    <>
    <Header_component/>
    {/* <Inputform/> */}
    <div className="card-sec container">
      <Card/>
    </div>
    </>
  )
}

export default App
