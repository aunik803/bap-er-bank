
/* 1. add event lisetner to the withdraw button
2. get withdraw amount from the withdraw input field
2.5 make sure convert strig withdraw amount to a number type 
3. clear the withdraw field
4. get the previous withdraw total
5. calculate new doposit total and set the value to the withdraw total
6. get current balance total
7. calculate the new balance and set it the balance total element
 */

document.getElementById('btn-withdrow').addEventListener('click', function () {

    // step : 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawTotal = parseFloat(withdrawFieldString);

    // step : 3
    withdrawField.value = '';

    // step : 4
    const withdrawTotal = document.getElementById('withdrow-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);

    // step : 5
    const newWithdrawAmount = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotal.innerText = newWithdrawAmount;

    // step : 6
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString); 


    // step : 7 
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

})