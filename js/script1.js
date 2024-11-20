document.getElementById("rform").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for completing your application. We will be in touch soon!");
});

function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}
