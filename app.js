window.addEventListener('load', () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pad");
    const tt = document.querySelectorAll("h3");

    document.onkeydown = e =>{

        let key = e.keyCode;

        if(key == 49 || key == 97){  // pressing #1
            // playing a sound
            sounds[0].volume = 0.3;
            sounds[0].currentTime = 0;
            sounds[0].play();
            // styling the container
            pads[0].style.transform = "scale(1.05)";
            pads[0].style.borderRadius = "50%";
            // styling the font
            tt[0].style.fontSize = "2rem";
            tt[0].style.color = "hsl(0, 0%, 86%)";
        }
        else if(key == 50 || key == 98){  // pressing #2
            sounds[1].volume = 0.3;
            sounds[1].currentTime = 0;
            sounds[1].play();
            pads[1].style.transform = "scale(1.05)";
            pads[1].style.borderRadius = "50%";
            tt[1].style.fontSize = "2rem";
            tt[1].style.color = "hsl(0, 0%, 86%)";
        }
        else if(key == 51 || key == 99){  // pressing #3
            sounds[2].volume = 0.3;
            sounds[2].currentTime = 0;
            sounds[2].play();
            pads[2].style.transform = "scale(1.05)";
            pads[2].style.borderRadius = "50%";
            tt[2].style.fontSize = "2rem";
            tt[2].style.color = "hsl(0, 0%, 86%)";
        }
        else if(key == 52 || key == 100){  // pressing #4
            sounds[3].volume = 0.3;
            sounds[3].currentTime = 0;
            sounds[3].play();
            pads[3].style.transform = "scale(1.05)";
            pads[3].style.borderRadius = "50%";
            tt[3].style.fontSize = "2rem";
            tt[3].style.color = "hsl(0, 0%, 86%)";
        }
        else if(key == 53 || key == 101){  // pressing #5
            sounds[4].volume = 0.3;
            sounds[4].currentTime = 0;
            sounds[4].play();
            pads[4].style.transform = "scale(1.05)";
            pads[4].style.borderRadius = "50%";
            tt[4].style.fontSize = "2rem";
            tt[4].style.color = "hsl(0, 0%, 86%)";
        }
        else if(key == 54 || key == 102){  // pressing #6
            sounds[5].volume = 0.3;
            sounds[5].currentTime = 0;
            sounds[5].play();
            pads[5].style.transform = "scale(1.05)";
            pads[5].style.borderRadius = "50%";
            tt[5].style.fontSize = "2rem";
            tt[5].style.color = "hsl(0, 0%, 86%)";
        }
    }

    document.onkeyup = e =>{ // Resetting all the styles back to 0

        let key = e.keyCode;
        if(key == 49 || key == 97){
            pads[0].style.transform = "scale(1)";
            pads[0].style.borderRadius = "0";
            tt[0].style.fontSize = "1rem";
            tt[0].style.color = "hsl(240, 41%, 8%)";
        }else if(key == 50 || key == 98){
            pads[1].style.transform = "scale(1)";
            pads[1].style.borderRadius = "0";
            tt[1].style.fontSize = "1rem";
            tt[1].style.color = "hsl(240, 41%, 8%)";
        }else if(key == 51 || key == 99){
            pads[2].style.transform = "scale(1)";
            pads[2].style.borderRadius = "0";
            tt[2].style.fontSize = "1rem";
            tt[2].style.color = "hsl(240, 41%, 8%)";
        }else if(key == 52 || key == 100){
            pads[3].style.transform = "scale(1)";
            pads[3].style.borderRadius = "0";
            tt[3].style.fontSize = "1rem";
            tt[3].style.color = "hsl(240, 41%, 8%)";
        }else if(key == 53 || key == 101){
            pads[4].style.transform = "scale(1)";
            pads[4].style.borderRadius = "0";
            tt[4].style.fontSize = "1rem";
            tt[4].style.color = "hsl(240, 41%, 8%)";
        }else if(key == 54 || key == 102){
            pads[5].style.transform = "scale(1)";
            pads[5].style.borderRadius = "0";
            tt[5].style.fontSize = "1rem";
            tt[5].style.color = "hsl(240, 41%, 8%)";
        }
    }
});