let E = parseInt(gets());
let X = gets().replace(/\s/g,',').trim().split(',');

X.length = E;

let menorValor = 0;
let indiceDoMenorValor = 0;

for(let i = 0; i < E; i++){
  if(i === 0)
    menorValor = X[i];
  else if(parseFloat(X[i]) < menorValor){
    menorValor = X[i];
    indiceDoMenorValor = i;
  }
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${indiceDoMenorValor}`); 
