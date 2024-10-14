document.getElementById('donate-now-btn').addEventListener('click',function(event){
 
        const inputBalance = inputFinder('input-balance');
        if(isNaN(inputBalance)){
            alert('Failed to Donate! Please Enter a Valid Amount');
            return;
        }
    const cashInBalance = textFinder('cash-in-btn');

    const newBalance = inputBalance + cashInBalance;
    document.getElementById('cash-in-btn').innerText = `${newBalance} BDT`;
   
})