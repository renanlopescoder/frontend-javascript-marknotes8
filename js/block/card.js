//Código percorrendo for dentro de for com muitos elementos
// var $cardColors = document.querySelectorAll('.card-options');
// var $cards = document.querySelectorAll('.card');
// for (var i = 0; i < $cardColors.length; i++) {
//   $cardColors[i].addEventListener('click', function(){
//     var $card = this.parentNode.parentNode.parentNode;
//     $card.dataset.color= this.dataset.color;
//     for (var index = 0; index < $cardColors.length; index++) {
//       $cardColors[index].classList.remove('isActive');
//     }
//     this.classList.add('isActive');
//   });
// }





// //Código usando o recurso do navegador ao nosso favor
// //Usando o evento do click
//
// var $cardColors = document.querySelectorAll('.card-options');
// var $cards = document.querySelectorAll('.card');
//
// for (var index = 0; index < $cards.length; index++) {
//   $cards[index].addEventListener('click', function(event){
//     var $this = event.target;
//     var $card = this;
//     var $cardContent = $card.querySelector('.card-content');
//     //this nesse caso é o cartão de aplicação e o
//     //$this é o elemento clicado então usamos a propriedade dataset
//     //para alterar a cor do cartão igual a do elemento clicado
//     //usamos o if para saber qual o elemento clicado e verificar se
//     //retornando um bool com o contains do classList
//     if($this.dataset.color){
//       $card.dataset.color = $this.dataset.color;
//       for (var position = 0; position < $cardColors.length; position++) {
//         $cardColors[position].classList.remove('isActive');
//       }
//       $this.classList.add('isActive');
//     };
//     if($this.classList.contains('card_delete')){
//       $card.remove();
//     };
//     if($this.classList.contains('card_edit')){
//       if($cardContent.getAttribute('contenteditable') == 'false'){
//       $cardContent.setAttribute('contenteditable','true');
//       $this.classList.add('isActive');
//       $cardContent.focus();
//     }else{
//       $cardContent.setAttribute('contenteditable','false');
//       $this.classList.remove('isActive');
//     }
//   };
//   });
// };





//Exercicio 01
//Pegando os elementos com a classe .card-options
// console.log($cardColors[0]);

//Exercicio 02
// var $cardColors = document.querySelectorAll('.card-options');
// $cardColors[0].addEventListener('click', function(){
//   console.log("Você clicou");
// });

//Exercicio 03
// var $cardColors = document.querySelectorAll('.card-options');
// for (var i = 0; i < $cardColors.length; i++) {
//   $cardColors[i].addEventListener('click', function(){
//     console.log("Você clicou");
//   });
// }

// Exercicio 07
// var $cardColors = document.querySelectorAll('.card-options');
// for (var i = 0; i < $cardColors.length; i++) {
//   $cardColors[i].addEventListener('click', function(){
//     var $card = this.parentNode.parentNode.parentNode;
//     $card.dataset.color= this.dataset.color;
//   });
// }

// Aluno
// var qualquer = [6];
// qualquer[1] = "Lalalala";
// qualquer[2] = "PAPAPAPAPAPA";
// console.log(qualquer[1]);
// console.log(qualquer[2]);

//Último Capítulo Código Final
//Código usando o recurso do navegador ao nosso favor
//Usando o evento do click

var $wrapCard = document.querySelector('.wrap-card');
var $cards = document.querySelectorAll('.card');
var $cardOptions = document.querySelectorAll('.card-options');

  $wrapCard.addEventListener('click', function (event){
    var $this = event.target;
    var $card = $this.parentNode.parentNode.parentNode;
    var $cardContent = $card.querySelector('.card-content');
    if($this.dataset.color){
      $card.dataset.color = $this.dataset.color;
      for (var position = 0; position < $cardOptions.length; position++) {
        $cardOptions[position].classList.remove('isActive');
      }
      $this.classList.add('isActive');
    };
    if($this.classList.contains('card_delete')){
      $card.remove();
    };
    if($this.classList.contains('card_edit')){
      if($cardContent.getAttribute('contenteditable') == 'false'){
      $cardContent.setAttribute('contenteditable','true');
      $this.classList.add('isActive');
      $cardContent.focus();
    }else{
      $cardContent.setAttribute('contenteditable','false');
      $this.classList.remove('isActive');
    }
  };
  });
