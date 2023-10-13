console.log("Hello World !");

const operandCalc = ["+","-","/","*"];
let saisieEcran = [];

// ----------------------------Je crée mon MAIN pour mettre la reste du HTML--------------------------------------
let main = document.createElement("main");
// ecranCalc.classList.add("main-calc");
document.body.appendChild(main);


// ------------------------------------Je crée mon écran ECRAN-------------------------
let ecranCalc = document.createElement("div");
console.log(ecranCalc);
ecranCalc.classList.add("ecran-calc");
ecranCalc.innerText = 0;
console.log(ecranCalc);
main.appendChild(ecranCalc);


// ------------------------------------Je crée mon clavier CLAVIER------------------------

let clavCalc = document.createElement("div");
console.log(clavCalc);
clavCalc.classList.add("clav-calc");
main.appendChild(clavCalc);


// ------------------------Je crée mon pavé numérique PAVE NUMERIQUE-----------
let pavNumCalc = document.createElement('div');
console.log(pavNumCalc);
pavNumCalc.classList.add("pav-num-calc");
clavCalc.appendChild(pavNumCalc);

for (let i = 9; i >= 0 ; i--) {
    let chiffreCalc = document.createElement("button");
    chiffreCalc.classList.add("chiffre-calc");
    chiffreCalc.innerText = i;
    pavNumCalc.appendChild(chiffreCalc);
    console.log(chiffreCalc);

    chiffreCalc.addEventListener("click", function saisieChiffre() {
    saisieEcran.push(chiffreCalc.innerText)
    ecranCalc.innerText = saisieEcran.join("");
});
}

// egalCalc.addEventListener("click", function() {
//     saisieEcran.push(egalCalc.innerText)
//     ecranCalc.innerText = saisieEcran.join("");
// });



// -------------Je crée ma virgule----------------
let virgCalc = document.createElement("button");
virgCalc.innerText = ".";
virgCalc.classList.add("chiffre-calc");
pavNumCalc.appendChild(virgCalc);

virgCalc.addEventListener("click", function sasieVirgule() {
    saisieEcran.push(virgCalc.innerText)
    ecranCalc.innerText = saisieEcran.join("")
    
})

//------------------je crée mon AC-------------
let acCalc = document.createElement("button")
acCalc.innerText = "AC";
acCalc.classList.add("Ac-calc");
pavNumCalc.appendChild(acCalc)

acCalc.addEventListener("click", function reset() {
    let ecranCalul = document.querySelector(".ecran-calc");
    saisieEcran = [];
    ecranCalul.innerText = 0;
    
})



// ----------------------Je crée mon pavé des operandes OPERANDES--------------

// --------Je crée la boite pour tout le pavé des operandes--------
let pavOpeCalc = document.createElement('div');
console.log(pavOpeCalc);
pavOpeCalc.classList.add("pav-ope-calc");
clavCalc.appendChild(pavOpeCalc);

// ----Je crée une boite juste pour les 4 operandes-----
let allOpeCalc = document.createElement('div');
console.log(allOpeCalc);
allOpeCalc.classList.add("all-ope-calc")
pavOpeCalc.appendChild(allOpeCalc)

// -----Je crée les boutons pour les opérandes----
operandCalc.forEach(operand => {
    let opeCalc = document.createElement('button')
    console.log(opeCalc);
    opeCalc.classList.add('ope-calc')
    opeCalc.innerText = [operand];
    allOpeCalc.appendChild(opeCalc)

    opeCalc.addEventListener("click", function() {
    saisieEcran.push(opeCalc.innerText)
    ecranCalc.innerText = saisieEcran.join("");
});
});



// ---------------Je crée la div pouir le bouton égal--------------------

let boiteEgalCalc = document.createElement('div');
console.log(boiteEgalCalc);
boiteEgalCalc.classList.add('boite-egal-calc');
pavOpeCalc.appendChild(boiteEgalCalc)

// -----------Je crée mtn le bouton = EGAL--------

let egalCalc = document.createElement('button');
console.log(egalCalc);
egalCalc.classList.add('egal-calc');
egalCalc.innerText = ('=');
boiteEgalCalc.appendChild(egalCalc)
egalCalc.addEventListener("click", function() {
    let resultat = calculate();
    console.log("Resultat : ", resultat);
    ecranCalc.innerText = resultat;
    
        let numberfixed = resultat;
    let res = resultat.toFixed(2);
    console.log(res);
    ecranCalc.innerText = res;
    
    if (res <=4) {
        ecranCalc = "none"
        
     }  
    // ecranCalc.innerText = saisieEcran.join("");
});

//------------Je crée ma fonction calculate----------

function calculate() {
    console.log("Saisies écran : ", saisieEcran); //join()
    console.log(saisieEcran.join(''));
    let result = eval(saisieEcran.join(''));
    console.log(result);
    return result;
    // console.log(eval('2+2'));

}