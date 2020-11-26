var accordinItemHeaders = document.querySelectorAll(".accordin-item-header");
accordinItemHeaders.forEach(accordinItemHeaders => {
    console.log(accordinItemHeaders)
    accordinItemHeaders.addEventListener("click", event =>{
        accordinItemHeaders.classList.toggle("active");
    })
})

var slider = document.getElementById("conversions-value")
var output = document.getElementById("value")

output.innerHTML = slider.value

slider.oninput = function() {
    if(this.value > 3000){
        output.innerHTML = 3000 + "+"
    }
    // else if(this.value < 999){
    //     output.innerHTML = this.value
    // } this one i have written to keep comma ex-1,000
    else{
        // this.value = this.value
        output.innerHTML = this.value
    }
}

slider.addEventListener("mousemove", function(){
    var x= ((Number(slider.value)/3250) * 100);
    // console.log(x)
    var color = 'linear-gradient(90deg, rgb(0, 0, 255)' + x + '%, rgba(48, 48, 48, 0.643)' + x + '%)';
    // console.log(color)
    slider.style.background = color;
})

// slider.addEventListener("click", function(){

// })



var slider_visitors = document.getElementById("visitors-value")
var output_visitors = document.getElementById("visitors")

output_visitors.innerHTML = slider_visitors.value

slider_visitors.oninput = function() {
    if(this.value > 50000){
        output_visitors.innerHTML = 50000 + "+"
    }
    // else if(this.value < 999){
    //     output_visitors.innerHTML = this.value
    // }
    else{
        // this.value = this.value
        output_visitors.innerHTML = this.value
    }
}

slider_visitors.addEventListener("mousemove", function(){
    var x= ((Number(slider_visitors.value)/50000) * 100);
    console.log(x)
    var color = 'linear-gradient(90deg, rgb(0, 0, 255)' + x + '%, rgba(48, 48, 48, 0.643)' + x + '%)';
    // console.log(color)
    slider_visitors.style.background = color;
})

var slider_domain = document.getElementById("domain-value")
var output_domain = document.getElementById("domains")

output_domain.innerHTML = slider_domain.value

slider_domain.oninput = function() {
    if(this.value > 15){
        output_domain.innerHTML = 15 + "+"
    }
    else{
        // this.value = this.value
        output_domain.innerHTML = this.value
    }
}

slider_domain.addEventListener("mousemove", function(){
    var x= ((Number(slider_domain.value)/16) * 100);
    console.log(x)
    var color = 'linear-gradient(90deg, rgb(0, 0, 255)' + x + '%, rgba(48, 48, 48, 0.643)' + x + '%)';
    // console.log(color)
    slider_domain.style.background = color;
})