/*Um objeto é uma coleção de dados e/ou funcionalidades relacionadas 
(que geralmente consistem em diversas variáveis e funções — que são chamadas
     de propriedades e métodos quando estão dentro de objetos)*/

var pessoas = {};

//--------------------------------------------


var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
      alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
      alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
  };

  console.log(pessoa.nome); // objeto

  //------------------------------------------------------------
  
var profile = {
    nome: ['Thyago', 'Jose'],
    idade: 30,
    sexo: 'masculino',
    interesses: ['musica, estudar']
}

console.log(profile.nome[0]);
console.log(profile.idade);
console.log(profile.sexo);

//---------------------------------------------------------


  