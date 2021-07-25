import { BrowserRouter, NavLink, Route } from "react-router-dom"
import Condoms from "./Condoms";
import Knives from "./Knives";
import NavBar from "./NavBar"
import PregnancyTest from "./PregnancyTest"
import Sushi from "./Sushi"

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <BrowserRouter>
                <NavBar />
                <div>Vending machine!</div>
                <Route exact path="/condoms">
                    <Condoms />
                </Route>
                <Route exact path="/knives">
                    <Knives />
                </Route>
                <Route exact path="/pregnancytest">
                    <PregnancyTest />
                </Route>
                <Route exact path="/sushi">
                    <Sushi />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;