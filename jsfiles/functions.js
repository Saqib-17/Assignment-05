function inputFinder(id){
   const inputNum =  document.getElementById(id).value;
   if(inputNum <= 0){
    return NaN;
}
   const inputNumber = parseFloat(inputNum);
   return inputNumber;
}

function textFinder(id){
    
    const word = document.getElementById(id).innerText;   
//spliting the string  
    let array = word.split(" ");  
    const number = parseFloat(array[0]);
    return number;

}

//cashin funciton

function cashIn(id){
    document.getElementById('donate-now-btn').addEventListener('click',function(event){
        event.preventDefault();
        
            const inputBalance = inputFinder('input-balance');
            if(isNaN(inputBalance)){
                alert('Failed to Donate! Please Enter a Valid Amount');
                return;
            }
        const cashInBalance = textFinder('cash-in-btn');
    
        const newBalance = inputBalance + cashInBalance;
        document.getElementById('cash-in-btn').innerText = `${newBalance} BDT`;
    
       //call history
       history(inputBalance);
    })
    
    
}
function history(id){
    //Donation history
    const div = document.createElement('div');
        div.classList.add('bg-secondary-color');


        
        // Get the current date and time
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    
        // Create the donation history entry
        div.innerHTML = `
        <p ><strong>${id} Taka is Donated for flood-2024 at Noakhali, Bangladesh</strong></p>
        <p >Date : ${formattedDate} (Bangladesh Standard Time)</p>
        `;
        div.style.border = '1px solid gray';
        div.style.margin = '20px';
        div.style.marginLeft = '0px';
        div.style.borderRadius = '16px';
        div.style.padding = '24px';
    
        
    
        // Append the donation history entry to the container
        document.getElementById('donation-container').appendChild(div);
}