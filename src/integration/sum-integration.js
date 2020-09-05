
function checkInput(a,b){
    if(isNaN(a) || isNaN(b)){
        return false;
    }
    return true
};

function sum(a,b) {
    const boolean = checkInput(a,b);
    if(boolean === false) {
        return 'Input a valid number';
    }
    return parseInt(a) + parseInt(b);
};


module.exports = {
    sum, checkInput
};