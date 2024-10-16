//show pages
function showPage(id){
    document.getElementById('donation-history-form').classList.add('hidden');
    document.getElementById('donation-card-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');



}
//scroll
window.addEventListener('scroll',function(){
const actionButton = document.getElementById('action-btn');
if (window.scrollY > 50) {

    actionButton.classList.add('backdrop-blur-sm','top-32','bottom-28');

} 
else { 

    actionButton.classList.remove('backdrop-blur-sm','top-32','bottom-28');
}

})

