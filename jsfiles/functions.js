function inputFinder(id){
   const inputNum =  document.getElementById(id).value;
   const inputNumber = parseFloat(inputNum);

    if(isNaN(inputNumber) || inputNumber < 0){
        return NaN;
    }

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

function cashIn(loc,button,input,cashInButton){
   
    document.getElementById(button).addEventListener('click',function(event){
        event.preventDefault();
       
        
            const inputBalance = inputFinder(input);
            if(isNaN(inputBalance) || inputBalance < 0){
                alert('Failed to Donate! Please Enter a Valid Amount');
                return;
                
            }
            
          
    
            
        const cashInBalance = textFinder(cashInButton);
    
        const newBalance = inputBalance + cashInBalance;
        document.getElementById(cashInButton).innerText = `${newBalance} BDT`;
    
       //call history
       history(inputBalance,loc);
    })
    
    
}









function history(id,loc){
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
        <p ><strong>${id} Taka is Donated for ${loc}, Bangladesh</strong></p>
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


//cash out function
function cashOut(button,input){

    document.getElementById(button).addEventListener('click',function(event){
        event.preventDefault();
        const inputBalance = inputFinder(input);
        if(isNaN(inputBalance) || inputBalance < 0){
            alert('Failed to Donate! Please Enter a Valid Amount');
            return;
            
        }
       
        const cashOutBalance = textFinder('cash-out-btn');
        
        const newBalance = cashOutBalance - inputBalance;
        document.getElementById('cash-out-btn').innerText = `${newBalance} BDT`;
        })
}