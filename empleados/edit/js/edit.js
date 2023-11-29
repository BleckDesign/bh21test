const ubicaciones = document.getElementById('ubicaciones');
const inubi = document.getElementById('inubi');

const inpromaster = document.getElementById('inpromaster');
const inpro = document.getElementById('inpro');

const arrowback = document.getElementById('arrowback');

//loader
const cortinaa = document.getElementById('cortinaa');
const cortinacont = document.getElementById('cortinacont');

//editor
const shadow = document.getElementById('shadow');
const editpmaster = document.getElementById('editpmaster');

//catalogos
const cgmaster = document.getElementById('cgmaster');
const cgbox = document.getElementById('cgbox');
const cgshadow = document.getElementById('cgshadow');

//adclient
const addclient = document.getElementById('addclient');
const addclientbox = document.getElementById('addclientbox');
const addclientshadow = document.getElementById('addclientshadow');




function showproyect() {
    inpromaster.style.display = "flex";
    setTimeout(function(){
        inpro.style.transform = "translateY(0vh)";
    },50)
}

function hideubi() {
    inubi.style.transform = "translateY(100vh)";
    setTimeout(function(){
        ubicaciones.style.display = "none";
    },550)
}
function showubi() {
    ubicaciones.style.display = "flex";
    setTimeout(function(){
        inubi.style.transform = "translateY(0vh)";
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



// cierre/apertura del editor de proyectos

shadow.addEventListener('click',function(){
    editpmaster.style.display = "none";
})

function editopen() {
    editpmaster.style.display = "flex";
}



cgshadow.addEventListener('click',function(){
    cgmaster.style.display = "none";
})
function showcg(){
    cgmaster.style.display = "flex";
}

addclientshadow.addEventListener('click',function(){
    addclient.style.display = "none";
})
function showaddclient(){
    addclient.style.display = "flex";
}