import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import PaymentMethodPage from "./components/PaymentMethodPage";
import CashAppPage from "./components/CashAppPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>              
        <Route path="/" element={<PaymentMethodPage />}></Route>        
        <Route path="/cash-app-pay" element={<CashAppPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
