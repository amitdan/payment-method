import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function PaymentMethodPage() {
    const navigate = useNavigate();    
    const dispatch = useDispatch(); 
    
  const handleCashAppPay = () => { 
      navigate('/cash-app-pay');
  }
  
   const handleCashAppPayWorking = () => { 
      navigate('/cash-app-pay-working');
  }

    return (
        <div className="container px-4">         
                     
            
            <div className="row mt-5 d-flex justify-content-center">               
                   
            <button 
                    className="col-8 rounded-3 pt-3 text-center link border-0" 
                    style={{backgroundColor: "#EFF0F6", textDecoration: "none"}}
                    onClick={handleCashAppPay}
                >
                    <h4>Cash App Pay</h4> <br/>
                </button>
            </div>
			
			 <div className="row mt-5 d-flex justify-content-center">               
                   
            <button 
                    className="col-8 rounded-3 pt-3 text-center link border-0" 
                    style={{backgroundColor: "#EFF0F6", textDecoration: "none"}}
                    onClick={handleCashAppPayWorking}
                >
                    <h4>Cash App Pay - Working</h4> <br/>
                </button>
            </div>
        </div>
    );
}