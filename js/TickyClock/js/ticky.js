// declaring variables
var vardate,varhours,varminute,varsecond, varclock, varclr;

function clockFunction(){
    vardate = new Date();
    varhours = vardate.getHours();
    varminute = vardate.getMinutes();
    varsecond= vardate.getSeconds();

if(varhours<=9){
    varhours='0'+ varhours;
}
if(varminute<=9){
    varminute='0'+ varminute;
}
if(varsecond<=9){
    varsecond='0'+ varsecond;
}


varclock = varhours + ":" + varminute+ ":" + varsecond;
varclr = "#"+varhours+varminute+varsecond;

document.getElementById('clock').innerHTML = varclock;
document.body.style.background = varclr;

setTimeout(clockFunction,1000);

}

clockFunction();