//
document.getElementById('donation-history-btn').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation-history-btn').style.backgroundColor = '#B4F461';
    document.getElementById('donation-button').style.backgroundColor = '#fff'; 
    showPage('donation-history-form');
    
})
document.getElementById('donation-button').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation-button').style.backgroundColor = '#B4F461';
    document.getElementById('donation-history-btn').style.backgroundColor = '#fff'; 
    showPage('donation-card-form');
   
})
document.getElementById('blog').addEventListener('click',function(){
    window.location.href = './blog.html';
})


