let bjpCount = document.getElementById("bjp");
let cilinderCount = document.getElementById("cilinder");
let penCount = document.getElementById("pen");
let congressCount = document.getElementById("congress");
let plowCount = document.getElementById("plow");
let waterPotCount = document.getElementById("waterPot");
let poleCount = document.getElementById("pole");
let broomCount = document.getElementById("broom");
let btns = document.querySelectorAll(".container button");
let audio = new Audio("click-button-166324.mp3");
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
let count7=0;
let count8=0;

let light = document.querySelectorAll('.red-light');
btns.forEach((btn) => {
    btn.onclick = () => {
        audio.play();
        let btnValue = btn.value;
        if(btnValue == "bjp")
        { 
            count1 = count1 + 1  
            bjpCount.innerHTML = "0" + count1; 
            greenLightAdd(0);
            greenLightRemove(0);
        }else if (btn.value == "cilinder"){
             count2 = count2 + 1  
            cilinderCount.innerHTML = "0" + count2; 
            greenLightAdd(1);
            greenLightRemove(1);
        }else if(btn.value == "pen"){
            
            count3 = count3 + 1  
            penCount.innerHTML = "0" + count3; 
            greenLightAdd(2);
            greenLightRemove(2);
        }else if(btn.value == "congress"){
            
            count4 = count4 + 1  
            congressCount.innerHTML = "0" + count4; 
            greenLightAdd(3);
            greenLightRemove(3);
        }else if(btn.value == "plow"){
            
            count5 = count5 + 1  
            plowCount.innerHTML = "0" + count5;
            greenLightAdd(4);
            greenLightRemove(4); 
        }else if(btn.value == "waterPot"){
            
            count6 = count6 + 1  
            waterPotCount.innerHTML = "0" + count6; 
            greenLightAdd(5);
            greenLightRemove(5);
        }else if(btn.value == "pole"){
            
            count7 = count7 + 1  
            poleCount.innerHTML = "0" + count7;
            greenLightAdd(6);
            greenLightRemove(6);
        }else {
            
            count8 = count8 + 1  
            broomCount.innerHTML = "0" + count8; 
            greenLightAdd(7);
            greenLightRemove(7);
        }
      }
    });

    function greenLightAdd(e){
        light[e].classList.remove('red-light');
        light[e].classList.add('green-light');
    }

    function greenLightRemove(e){
        setTimeout(() => {
            light[e].classList.remove('green-light');
            light[e].classList.add('red-light');
        },500);
    }