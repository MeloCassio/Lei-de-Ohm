let btn1 = document.querySelector(".Botão1");
let btn2 = document.querySelector(".Botão2");
let btn3 = document.querySelector(".Botão3");

let tensao = document.getElementById("tensao");
let corrente = document.getElementById("corrente");
let resistencia = document.getElementById("resistencia");

btn1.onclick = function() {
    tensao.style.display = "block";
    corrente.style.display = "none";
    resistencia.style.display = "none";
};

btn2.onclick = function() {
    tensao.style.display = "none";
    corrente.style.display = "block";
    resistencia.style.display = "none";
};

btn3.onclick = function() {
    tensao.style.display = "none";
    corrente.style.display = "none";
    resistencia.style.display = "block";
};


function calcTensao() {
    let r = parseFloat(document.getElementById("r").value);
    let i = parseFloat(document.getElementById("i").value);
    document.getElementById("resT").innerText = "A Tensão é de: " + (r * i) + "V" ;
}

function calcCorrente() {
    let v = parseFloat(document.getElementById("v2").value);
    let r = parseFloat(document.getElementById("r2").value);

    if (r === 0) {
        document.getElementById("resC").innerText = "Não é possível dividir por zero";
    } else {
        document.getElementById("resC").innerText = "A Corrente é de: " + (v / r) + "A" ;
    }
}

function calcResistencia() {
    let v = parseFloat(document.getElementById("v3").value);
    let i = parseFloat(document.getElementById("i3").value);

    if (i === 0) {
        document.getElementById("resR").innerText = "Não é possível dividir por zero";
    } else {
        document.getElementById("resR").innerText = "A Resistência é de:"  + (v / i) + "Ω" ;
    }
}

