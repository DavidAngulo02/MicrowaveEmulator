var counter = 0;


function addCounter(addition) {
    counter += addition*10;
    updateCounter();
    return counter;
}

function eraseCounter() {
    counter = 0;
    updateCounter();
    return document.getElementById('chicken').src='raw_chicken.jpg';
}

function beginCounter() {

    var downloadTimer = setInterval(function(){
        if(counter < 0){
            clearInterval(downloadTimer);
            return endCounter();
        }
        updateCounter();
        counter -= 1;
    }, counter);

    return document.getElementById('chicken').src='micro_chicken.jpg';
}

function updateCounter(){
    return document.getElementById("timer").innerHTML = counter;

}

function endCounter() {
    counter = 0;
    return document.getElementById('chicken').src='roast_chicken.jpg';
}
