let screen = document.getElementById('screen');
const block0 = document.getElementById('block0');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const block5 = document.getElementById('block5');
const block6 = document.getElementById('block6');
const block7 = document.getElementById('block7');
const block8 = document.getElementById('block8');
const block9 = document.getElementById('block9');
const total = document.getElementById('total');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const dash = document.getElementById('dash');
const dot = document.getElementById('dot');
const multiply = document.getElementById('multiply');
const clear = document.getElementById('clear');

let operandoa;
let operandob;
let operacion;

let screenContent = "";

block0.addEventListener('click', function() {
    screen.textContent += block0.value;
});

block1.addEventListener('click', function() {
    screen.textContent += block1.value;
});


block2.addEventListener('click', function() {
    screen.textContent += block2.value;
});

block3.addEventListener('click', function() {
    screen.textContent += block3.value;
});

block4.addEventListener('click', function() {
    screen.textContent += block4.value;
});

block5.addEventListener('click', function() {
    screen.textContent += block5.value;
});

block6.addEventListener('click', function() {
    screen.textContent += block6.value;
});

block7.addEventListener('click', function() {
    screen.textContent += block7.value;
});

block8.addEventListener('click', function() {
    screen.textContent += block8.value;
});

block9.addEventListener('click', function() {
    screen.textContent += block9.value;
});

dot.addEventListener('click', function() {
    screen.textContent += dot.value;
});

clear.addEventListener('click', function() {
    reset();
});

add.addEventListener('click', function() {
    operandoa = screen.textContent;
    operacion = "+";
    clean();
});

minus.addEventListener('click', function() {
    operandoa = screen.textContent;
    operacion = "-";
    clean();
});

multiply.addEventListener('click', function() {
    operandoa = screen.textContent;
    operacion = "*";
    clean();
});

dash.addEventListener('click', function() {
    operandoa = screen.textContent;
    operacion = "/";
    clean();
});

total.addEventListener('click', function() {
    operandob = screen.textContent;
    solve();
});

function clean() {
    screen.textContent = "";
}

function reset() {
    screen.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function solve() {
    let res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    reset();
    screen.textContent = res;
}