import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function CashAppPage() {

    useEffect(() => {

        const appId = 'sandbox-sq0idb-uonINeTlY7QlKSvV8MRI_g';
        const locationId = 'L68Z9Q3SHPRJX';
  
        function buildPaymentRequest(payments) {
          const paymentRequest = payments.paymentRequest({
            countryCode: 'US',
            currencyCode: 'USD',
            total: {
              amount: '1.00',
              label: 'Total',
            },
          });
          return paymentRequest;
        }
  
        async function initializeCashApp(payments) {
          const paymentRequest = buildPaymentRequest(payments);
          const cashAppPay = await payments.cashAppPay(paymentRequest, {
            redirectURL: window.location.href,
            referenceId: 'my-website-00000001',
          });
          const buttonOptions = {
            shape: 'semiround',
            width: 'full',
          };
          await cashAppPay.attach('#cash-app-pay', buttonOptions);
          return cashAppPay;
        }
  
        async function createPayment(token) {
          const body = JSON.stringify({
            locationId,
            sourceId: token,
          });
  
          const paymentResponse = await fetch('/payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          });
  
          if (paymentResponse.ok) {
            return paymentResponse.json();
          }
  
          const errorBody = await paymentResponse.text();
          throw new Error(errorBody);
        }
  
        // status is either SUCCESS or FAILURE;
        function displayPaymentResults(status) {
          const statusContainer = document.getElementById(
            'payment-status-container'
          );
          if (status === 'SUCCESS') {
            statusContainer.classList.remove('is-failure');
            statusContainer.classList.add('is-success');
          } else {
            statusContainer.classList.remove('is-success');
            statusContainer.classList.add('is-failure');
          }
  
          statusContainer.style.visibility = 'visible';
        }         
        
        //document.addEventListener('DOMContentLoaded', async function () {
          if (!window.Square) {
            throw new Error('Square.js failed to load properly');
          }
  
          let payments;
          try {
            payments = window.Square.payments(appId, locationId);
          } catch {
            const statusContainer = document.getElementById(
              'payment-status-container'
            );
            statusContainer.className = 'missing-credentials';
            statusContainer.style.visibility = 'visible';
            return;
          }
  
          let cashAppPay;
          try {
            cashAppPay = initializeCashApp(payments);
          } catch (e) {
            console.error('Initializing Cash App Pay failed', e);
          }
          
          
        //});      
                   
        
    })  

    

    return (
        <div className="container px-4">
            <div className="row mt-3">
                <Link className='col-1 my-auto link' to='/timeslot'><i className="fa fa-arrow-left"></i></Link>                
            </div>
            <div className="row mt-3">
                <h1 className="col my-auto text-center">Cash App pay payment method</h1>
            </div>          
            
            <div className="row mt-5 d-flex justify-content-center">               
                   
                <div id="cash-app-pay"></div>
                <div id="payment-status-container"></div>
            </div>
        </div>
    );
}