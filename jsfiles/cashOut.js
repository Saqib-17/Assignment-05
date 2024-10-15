document.getElementById('donate-now-btn1').addEventListener('click',function(event){
const inputBalance = inputFinder('input-balance');
if(isNaN(inputBalance) && inputBalance < 0){
    alert('Failed to Donate! Please Enter a Valid Amount');
    return;
}
const cashOutBalance = textFinder('cash-out-btn');

const newBalance = cashOutBalance - inputBalance;
document.getElementById('cash-out-btn').innerText = `${newBalance} BDT`;
})


