const inpromaster = document.getElementById('inpromaster');
const inpro = document.getElementById('inpro');

const arrowback = document.getElementById('arrowback');

//loader
const cortinaa = document.getElementById('cortinaa');
const cortinacont = document.getElementById('cortinacont');

function showproyect() {
    inpromaster.style.display = "flex";
    setTimeout(function(){
        inpro.style.transform = "translateY(0vh)";
    },50)
}

function hideproyect() {
    inpro.style.transform = "translateY(100vh)";
    setTimeout(function(){
        inpromaster.style.display = "none";
    },550)
}


window.onload = function() {
    setTimeout(function(){
        cortinacont.style.transform = "translateY(100vh)";
        setTimeout(function(){
            cortinaa.style.display = "none";
        },1050)
    ,500})
};

arrowback.addEventListener('click',function(){
    cortinaa.style.display = "flex";
    setTimeout(function(){
        cortinacont.style.transform = "translateY(0vh)";
        setTimeout(function(){
            window.location = "https://bh21publicidad.com/";
        },1050)
    },50)
})