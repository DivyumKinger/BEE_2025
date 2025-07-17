//! print stacktrace in Javascript
function stepOne(){
    stepTwo();
}

function stepTwo() {
    stepThree();
}

function stepThree(){
    console.trace("Reached stepThree");
}

stepOne();