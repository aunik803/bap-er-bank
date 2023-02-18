/* 
1. add event lisetner to the deposit button
2. get deposit amount from the deposit input field
2.5 make sure convert strig deposit amount to a number type 
3. clear the deposit field
4. get the previous deposit total
5. calculate new doposit total and set the value to the deposit total
6. get current balance total
7. calculate the new balance and set it the balance total element
*/

// step : 1
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step : 2
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
  
    // step : 3
    depositField.value = '';

    // step : 4
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositString = depositTotal.innerText;
    const newPreviousDeposit = parseFloat(previousDepositString);
    
    // step : 5
    const newDepositTotal = newPreviousDeposit + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // step : 6
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);


    // step : 7
    const newBalanceTotal = previousBalance + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})