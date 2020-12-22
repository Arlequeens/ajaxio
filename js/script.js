function isOK(obj, expression) {
    var monReg = new RegExp(expression);
    var chaine = document.getElementById(obj + 'TXT');
    oSaisie = monReg.test(chaine);
}
