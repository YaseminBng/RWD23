const fhero = {
    1:'./1_HEADER_Würfel/Header_1.png',
    2:'./1_HEADER_Würfel/Header_2.png',
    3:'./1_HEADER_Würfel/Header_3.png',
    4:'./1_HEADER_Würfel/Header_4.png',
}

const step = 3;

function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/150) + 1, 4);
  const imageToUse = fhero[label];
  // Change the background image
  $('.image-container').css('background-image', `url("${imageToUse}")`);
}

$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "https://yaseminbng.github.io/RWD23/4_INTERVIEW/layout_dice.png"){
        document.getElementById("imgClickAndChange").src = "./4_INTERVIEW/dice.png";
    } else {
        document.getElementById("imgClickAndChange").src = "./4_INTERVIEW/layout_dice.png";
    }
}

function chooseBox1() {
    document.getElementById("box").src = "./3_CHOOSEABOX/ChooseABox_1.png";
    
}

function chooseBox2() {
    document.getElementById("box").src = "./3_CHOOSEABOX/ChooseABox_2.png";

}

function clickBox() {
    if (document.getElementById("box").src == "./3_CHOOSEABOX/ChooseABox_1.png"){
       
        document.getElementById("box").src = "./3_CHOOSEABOX/ChooseABox_1+.gif";
    }else if (document.getElementById("box").src == "https://yaseminbng.github.io/RWD23/3_CHOOSEABOX/ChooseABox_2.png"){
        document.getElementById("box").src = "./3_CHOOSEABOX/ChooseABox_2+.gif";
    } else{
        document.getElementById("box").src = "./3_CHOOSEABOX/ChooseABox_0.pngü";
    }
}