import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AddAccount from "./components/account/AddAccount";
import ListAccounts from './components/account/ListAccounts';
import UpdateAccount from "./components/account/UpdateAccount";
import HeaderComponent from './components/HeaderComponent'
import AddTypeAccount from "./components/typeAccount/AddTypeAccount";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListAccounts/>}></Route>
            <Route path="/create-account" exact element={<AddAccount />}></Route>
            <Route path="/update-account" exact element={<UpdateAccount />}></Route>
            <Route path="/create-typeAccount" exact element={<AddTypeAccount />}></Route>
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
