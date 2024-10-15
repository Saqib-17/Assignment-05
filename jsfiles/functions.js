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