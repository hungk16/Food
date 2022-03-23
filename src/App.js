import "./styles/App.scss"
import Home from "./components/Home"
import {Brands} from "./components/Brands";
import {Specialities} from "./components/Specialities";
import {About} from "./components/About";
import {Facts} from "./components/Facts";
import Special from "./components/Special";
import {Reservations} from "./components/Reservations";
import {Footer} from "./components/Footer";


function App() {
    return (
        <div className="App">
            <Home/>
            <Brands/>
            <Specialities/>
            <About/>
            <Facts/>
            <Special/>
            <Reservations/>
            <Footer/>
        </div>
    );
}

export default App;


