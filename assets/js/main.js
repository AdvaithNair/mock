function randomizeChar(inChar) {
    if(Math.round(Math.random()) == 1) {
        return inChar.toUpperCase();
    } else {
        return inChar.toLowerCase();
    }
}

function baseMock(inString) {
    inString = inString.toLowerCase();
    for (var i = 0; i < inString.length; i++) {
        var currentChar = inString.charAt(i);
        if(currentChar == "i") {
            continue;
        } else if (currentChar == "l") {
            inString = inString.replace(currentChar, "L");
        } else {
            inString = inString.replace(currentChar, randomizeChar(currentChar));
        }
    }
    return inString;
}

function mockifyText() {
    var inString = document.getElementById('Text1').value;
    document.getElementById('Text2').value = baseMock(inString);
}

function clearText(ID) {
    document.getElementById(ID).value = "";
}

function changeText(ID) {
    var inString = document.getElementById(ID).textContent;
    document.getElementById(ID).textContent = baseMock(inString);
}

function mockAll() {
    mockifyText();

    changeText('top');
    changeText('top2');

    changeText('input');
    changeText('write');
    changeText('sub');
    changeText('ci');

    changeText('output');
    changeText('get');
    changeText('co');
    changeText('cb');
}

mockAll();