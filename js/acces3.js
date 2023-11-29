//loader 
const logoacc = document.getElementById('logoacc');
const logoaccimg = document.getElementById('logoaccimg');

//inputs y boton del form

const userclient = document.getElementById('userclient');
const buttonstart = document.getElementById('buttonstart');
let ctuserclientvalue = 0;
let ctpruserclientvalue = 0;
        //arrowback
            const arrowback = document.getElementById('arrowback');

            const ghostmast = document.getElementById('ghostmast');
            const cortina = document.getElementById('cortina');




//loader fun
window.onload = function(){
    setTimeout(function(){
    logoacc.style.background = "none";
    setTimeout(function(){
    logoacc.style.height = "100px";
    logoacc.style.top = "30px";
    setTimeout(function(){
    logoaccimg.style.height = "100%";
    },800)
    },1000)
},1000)
}

//funcion del form, llenado para display del button
function showbuttonidclient() {
    ctuserclientvalue = userclient.value;
    if (ctuserclientvalue.length == 6) {
        buttonstart.style.transform = "translateY(0px)";
        buttonstart.style.opacity = "1";
    }
    if (ctuserclientvalue.length < 6) {
        buttonstart.style.transform = "translateY(100px)";
        buttonstart.style.opacity = "0";
    }
}

userclient.addEventListener('input',showbuttonidclient);


            //arrow para volver al inicio
            arrowback.addEventListener('click',function(){
                ghostmast.style.display = "flex";
                setTimeout(function(){
                    cortina.style.transform = "translateY(0vh)";
                    setTimeout(function(){
                        window.location = "https://bh21publicidad.com/";
                    },1200)
                },50)
            })