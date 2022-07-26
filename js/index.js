function getRandomText() {
    var randomText = ["text 1", "hello user", "hello test 3", "oops error! text", "random-text"]
    return randomText[Math.floor(Math.random()*5)];
}

function replaceText(){
    document.getElementById('text').innerHTML = getRandomText();
}