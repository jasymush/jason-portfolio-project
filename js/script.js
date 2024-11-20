// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
}

// Form submission message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch soon!");
});

function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}
