var accordinItemHeaders = document.querySelectorAll(".accordin-item-header");
accordinItemHeaders.forEach(accordinItemHeaders => {
    console.log(accordinItemHeaders)
    accordinItemHeaders.addEventListener("click", event =>{
        accordinItemHeaders.classList.toggle("active");
    })
})