alert("hello")
var faqHeaderIcon = document.querySelectorAll(".faq_header_icon");
faqHeaderIcon.forEach(faqHeaderIcon => {
    console.log(faqHeaderIcon)
    faqHeaderIcon.addEventListener("click", event =>{
        faqHeaderIcon.classList.toggle("active");
    })
})