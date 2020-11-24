var slider = document.getElementById("conversions-value")
var output = document.getElementById("value")

output.innerHTML = slider.value

slider.oninput = function() {
    if(this.value > 3000){
        output.innerHTML = 3000 + "+"
    }
    else if(this.value < 999){
        output.innerHTML = this.value
    }
    else{
        this.value = this.value
        output.innerHTML = this.value
    }
}

slider.addEventListener("mousemove", function(){
    var x= (Number(slider.value)/32);
    console.log(x)
    var color = 'linear-gradient(90deg, rgb(0, 0, 255)' + x + '%, rgba(48, 48, 48, 0.643)' + x + '%)';
    // console.log(color)
    slider.style.background = color;
})