var whiteBackground = document.getElementById("whiteBackground");
var redWizPc = document.getElementById("redWizPc");
var blueWizNpcWithoutArmsOrArchimedes = document.getElementById("blueWizNpcWithoutArmsOrArchimedes");
var blueWizNpcDefaultLeftArm = document.getElementById("blueWizNpcDefaultLeftArm");
var blueWizNpcDefaultRightArm = document.getElementById("blueWizNpcDefaultRightArm");
var redWizPcDefendLeft = document.getElementById("redWizPcDefendLeft");
var blueWizNpcAttackLeft = document.getElementById("blueWizNpcAttackLeft");
var star_1 = document.getElementById("star_1");
var star_2 = document.getElementById("star_2");
var star_3 = document.getElementById("star_3");
var star_4 = document.getElementById("star_4");
var star_5= document.getElementById("star_5");
var magicMissileCondensation_0 = document.getElementById("magicMissileCondensation_0");
var magicMissileCondensation_1 = document.getElementById("magicMissileCondensation_1");
var magicMissileCondensation_2 = document.getElementById("magicMissileCondensation_2");
var magicMissileCondensation_3 = document.getElementById("magicMissileCondensation_3");
var magicMissileCondensation_4 = document.getElementById("magicMissileCondensation_4");
var magicMissileCondensation_5 = document.getElementById("magicMissileCondensation_5");
var blueWizNpcAttackLeftClench = document.getElementById("blueWizNpcAttackLeftClench");
var magicMissile_0 = document.getElementById("magicMissile_0");
var magicMissile_1 = document.getElementById("magicMissile_1");
var magicMissile_2 = document.getElementById("magicMissile_2");
var magicMissile_3 = document.getElementById("magicMissile_3");
var magicMissileDefendedLeftNpc = document.getElementById("magicMissileDefendedLeftNpc");
var magicMissileDefendedSplosion = document.getElementById("magicMissileDefendedSplosion");
var redWizPcDefendRight = document.getElementById("redWizPcDefendRight");
var magicMissileSplosion= document.getElementById("magicMissileSplosion");
var redWizPcStruckLeft= document.getElementById("redWizPcStruckLeft");


var init = () => {
    whiteBackground.setAttribute("class", "visible")
    redWizPc.setAttribute("class", "visible")
    blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "visible")
    blueWizNpcDefaultLeftArm.setAttribute("class", "visible")
    blueWizNpcDefaultRightArm.setAttribute("class", "visible")
}

var redWizPcDefendsLeft = () => {
    redWizPcDefendLeft.setAttribute("class", "visible")
}

var blueWizNpcAttacksLeft= () => {
    blueWizNpcAttackLeft.setAttribute("class", "visible")
    blueWizNpcDefaultLeftArm.setAttribute("class", "hidden")
}

var starForms = () => {
    star_1.setAttribute("class", "visible")
}

var starForms2= () => {
    star_2.setAttribute("class", "visible")
    star_1.setAttribute("class", "hidden")
}

var starForms3= () => {
    star_3.setAttribute("class", "visible")
    star_2.setAttribute("class", "hidden")
}

var starForms4= () => {
    star_4.setAttribute("class", "visible")
    star_3.setAttribute("class", "hidden")
}

var starForms5= () => {
    star_5.setAttribute("class", "visible")
    star_4.setAttribute("class", "hidden")
}

var magicMissileCondenses= () => {
    magicMissileCondensation_0.setAttribute("class", "visible")
    star_5.setAttribute("class", "hidden")
}

var magicMissileCondenses2= () => {
    magicMissileCondensation_1.setAttribute("class", "visible")
    magicMissileCondensation_0.setAttribute("class", "hidden")        
}

var magicMissileCondenses3= () => {
    magicMissileCondensation_2.setAttribute("class", "visible")
    magicMissileCondensation_1.setAttribute("class", "hidden")        
}

var magicMissileCondenses4= () => {
    magicMissileCondensation_3.setAttribute("class", "visible")
    magicMissileCondensation_2.setAttribute("class", "hidden")        
}

var magicMissileCondenses5= () => {
    magicMissileCondensation_4.setAttribute("class", "visible")
    magicMissileCondensation_3.setAttribute("class", "hidden")        
}

var magicMissileCondenses6= () => {
    magicMissileCondensation_5.setAttribute("class", "visible")
    magicMissileCondensation_4.setAttribute("class", "hidden")        
}

var blueWizNpcAttackLeftClenchs= () => {
    blueWizNpcAttackLeftClench.setAttribute("class", "visible")
    blueWizNpcAttackLeft.setAttribute("class", "hidden")
    magicMissileCondensation_5.setAttribute("class", "hidden")
}

var magicMissileFires= () => {
    magicMissile_0.setAttribute("class", "visible")
    blueWizNpcAttackLeft.setAttribute("class", "visible")
    blueWizNpcAttackLeftClench.setAttribute("class", "hidden")
}

var magicMissileFires2= () => {
    magicMissile_1.setAttribute("class", "visible")
    magicMissile_0.setAttribute("class", "hidden")    
}

var magicMissileFires3= () => {
    magicMissile_2.setAttribute("class", "visible")
    magicMissile_1.setAttribute("class", "hidden")    
}

var magicMissileFires4= () => {
    magicMissile_3.setAttribute("class", "visible")
    magicMissile_2.setAttribute("class", "hidden")    
}

var magicMissileDeflectedLeftNpc = () => {
    magicMissileDefendedLeftNpc.setAttribute("class", "visible")
    magicMissile_3.setAttribute("class", "hidden")
}

var magicMissileDeflectedSplosion= () => {
    magicMissileDefendedSplosion.setAttribute("class", "visible")
    magicMissileDefendedLeftNpc.setAttribute("class", "hidden")
}

var reset= () => {
    redWizPcDefendLeft.setAttribute("class", "hidden")
    magicMissileDefendedSplosion.setAttribute("class", "hidden")
    blueWizNpcAttackLeft.setAttribute("class", "hidden")
    blueWizNpcDefaultLeftArm.setAttribute("class", "visible")
}

var redWizPcDefendsRight = () => {
    redWizPcDefendRight.setAttribute("class", "visible")
}

var magicMissileSplodes = () => {
    magicMissile_3.setAttribute("class", "hidden")
    redWizPcDefendRight.setAttribute("class", "hidden")
    redWizPc.setAttribute("class", "hidden")
    magicMissileSplosion.setAttribute("class", "visible")
    redWizPcStruckLeft.setAttribute("class", "visible")
}

window.onload = init;
setTimeout(redWizPcDefendsLeft, 1000);
setTimeout(blueWizNpcAttacksLeft, 2000);
setTimeout(starForms, 3000);
setTimeout(starForms2, 3800);
setTimeout(starForms3, 4600);
setTimeout(starForms4, 5400);
setTimeout(starForms5, 6200);
setTimeout(magicMissileCondenses, 7000);
setTimeout(magicMissileCondenses2, 7800);
setTimeout(magicMissileCondenses3, 8600);
setTimeout(magicMissileCondenses4, 9400);
setTimeout(magicMissileCondenses5, 10200);
setTimeout(magicMissileCondenses6, 11000);
setTimeout(blueWizNpcAttackLeftClenchs, 11800);
setTimeout(magicMissileFires, 12800);
setTimeout(magicMissileFires2, 13600);
setTimeout(magicMissileFires3, 14400);
setTimeout(magicMissileFires4, 15200);
setTimeout(magicMissileDeflectedLeftNpc, 16000);
setTimeout(magicMissileDeflectedSplosion, 16800);
setTimeout(reset, 17800);
setTimeout(redWizPcDefendsRight, 18800);
setTimeout(blueWizNpcAttacksLeft, 19800);
setTimeout(starForms, 20800);
setTimeout(starForms2, 21600);
setTimeout(starForms3, 22400);
setTimeout(starForms4, 23200);
setTimeout(starForms5, 24000);
setTimeout(magicMissileCondenses, 24800);
setTimeout(magicMissileCondenses2, 25600);
setTimeout(magicMissileCondenses3, 26400);
setTimeout(magicMissileCondenses4, 27200);
setTimeout(magicMissileCondenses5, 28000);
setTimeout(magicMissileCondenses6, 28800);
setTimeout(blueWizNpcAttackLeftClenchs, 29600);
setTimeout(magicMissileFires, 30600);
setTimeout(magicMissileFires2, 31400);
setTimeout(magicMissileFires3, 32200);
setTimeout(magicMissileFires4, 33000);
setTimeout(magicMissileSplodes, 33800);