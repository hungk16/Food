import "./styles/App.scss"
import Home from "./components/Home"
import {Brands} from "./components/Brands";
import {Specialities} from "./components/Specialities";
import {About} from "./components/About";


function App() {
    return (
        <div className="App">
            <Home/>
            <Brands/>
            <Specialities/>
            <About/>
        </div>
    );
}

export default App;


