var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard_action');

$newCardContent.addEventListener('input', function(){
  if(document.querySelector('.error') != null){
    var $error = document.querySelector('.error');
    $error.remove();
  };
});
//O Event neste caso está servindo como injeção de dependência
$newCard.addEventListener('submit', function(event){
  event.preventDefault();
  if($newCardContent.value == ''){
    if(document.querySelector('.error') == null){
      var $error = document.createElement('span');
      $error.textContent = 'Erro, Favor preencher o campo para salvar uma nova nota';
      $error.classList.add('error');
      $newCard.insertBefore($error, $newCardAction);
    };
  }else{
    var $card = document.querySelector('.card');
    var $wrapCard = document.querySelector('.wrap-card');

    // Explicação(clodeNone){.cloneNode(true) copia todo conteúdo do elemento $card
    //   incluindo os elementos filho deste elemento o padrão sem parâmetro
    //   é (false)
    var $cardClone = $card.cloneNode(true);
    // };

    $cardClone.querySelector('.card-content').textContent = $newCardContent.value;
    $wrapCard.insertBefore($cardClone, $card);
    $newCardContent.value = '';
    $newCardContent.textContent = '';
  };
});
