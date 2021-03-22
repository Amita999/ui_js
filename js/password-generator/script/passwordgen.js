var keylist = "äbcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";
var tmp = "";
function genPassFunc(pLength){
    tmp ="";
    for(var i = 0; i<pLength;i++){
        tmp+= keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp;
}

function populateFormFunc(enterLength){
    document.passGen.output.value = genPassFunc(enterLength);
}