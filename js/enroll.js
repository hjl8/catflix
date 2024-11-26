function ma() {
    var bac=document.getElementById("logIn-background");
    var log=document.getElementById("logIn");
    bac.style.cssText= "visibility: visible;"
    log.style.cssText= "visibility: visible;transform: translateY(0px);"
}

function mb() {
    var bac=document.getElementById("logIn-background");
    var log=document.getElementById("logIn");
    var ter=document.getElementById("logUp");
    bac.style.cssText= "visibility: hidden;"
    log.style.cssText= "visibility: hidden;"
    ter.style.cssText= "visibility: hidden;transform: translateY(100px);"
}

function mc() {
    var bac=document.getElementById("logUp");
    var log=document.getElementById("logIn");
    bac.style.cssText= "visibility: visible;transform: translateY(0px);"
    log.style.cssText= "visibility: hidden;"
}

function md() {
    var bac=document.getElementById("logUp");
    var log=document.getElementById("logIn");
    bac.style.cssText= "visibility: hidden;transform: translateY(100px);"
    log.style.cssText= "visibility: visible;transform: translateY(0px);"
}

function od() {
    var bac=document.getElementById("logUp");
    var log=document.getElementById("logIn-background");
    bac.style.cssText= "visibility: hidden;transform: translateY(100px);"
    log.style.cssText= "visibility: hidden;;"
}

function me() {
    var bac=document.getElementById("logIn3");
    var log=document.getElementById("logIn");
    bac.style.cssText= "visibility: visible;transform: translateY(0px);"
    log.style.cssText= "visibility: hidden;"
}

function mf() {
    var bac=document.getElementById("logIn3");
    var log=document.getElementById("logIn");
    bac.style.cssText= "visibility: hidden;transform: translateY(100px);"
    log.style.cssText= "visibility: visible;transform: translateY(0px)"
}

function mg() {
    var bac=document.getElementById("logUp");
    var log=document.getElementById("logIn3");
    bac.style.cssText= "visibility: visible;transform: translateY(0px);"
    log.style.cssText= "visibility: hidden;transform: translateY(100px);"
}

function mk() {
    var bac=document.getElementById("logIn-background");
    var log=document.getElementById("logIn3");
    bac.style.cssText= "visibility: hidden;"
    log.style.cssText= "visibility: hidden;transform: translateY(100px);"
}