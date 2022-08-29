import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import PaymentMethodPage from "./components/PaymentMethodPage";
import CashAppPage from "./components/CashAppPage";
import CashAppPageWorking from "./components/CashAppPageWorking";

function App() {
  return (
    <BrowserRouter>
      <Routes>              
        <Route path="/" element={<PaymentMethodPage />}></Route>        
        <Route path="/cash-app-pay" element={<CashAppPage />}></Route>
		<Route path="/cash-app-pay-working" element={<CashAppPageWorking />}></Route>		
      </Routes>
    </BrowserRouter>
  );
}

export default App;
