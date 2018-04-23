var _word = ["anguila","ñu", "ñandu","celacanto","lince","avestruz", "aguila","chimpance","mandril","albatros","pelicano","danta","equidna","armadillo", "narval","basilisco","gecko","iguana"]
var _lista = (_word[Math.floor(Math.random() * Math.floor(18))].toLowerCase().split(''));
var _length = _lista.length;
var _letra = {};
var subHtml = "";
var _trying = 10;
document.getElementById("trying").value = _trying;

function _newGame(_game) {
  _new = confirm(_game + " . Desea intentarlo nuevamente");
    if (_new == true) {
        document.location.reload(true);
    }
}

function _Trying(letter){
  _compare = 0;
  for (var i = 0; i < _lista.length; i++) {
    if (letter == _lista[i]) {
      _compare += 1;
    }
  }
    console.log(_compare)
    if (_compare == 0)  {
      _trying -= 1
      document.getElementById("trying").value = _trying;
    }
}


function updateLetter(){
  subHtml = "";
  var _trying = 10;
  for (var i = 0; i < _length; i++){
    if (_lista[i] in _letra){
      subHtml += '<input class="line" type="text" name="" value="'+_lista[i]+'" maxlength="1" readonly>'
    }
    else {
      subHtml += '<input class="line" type="text" name="" value="'+" "+'" maxlength="1" readonly>'

    }
  }
  document.getElementById("content").innerHTML = subHtml;
}

function insertWord(letter){
  if (letter in _letra ){
    _letra[letter] += 1;
    alert("manco, letra repetida!")
  }
  else {
    _letra[letter] = 1;

  }
}

function validateLetter() {
  var letter = document.getElementById("enteredWord").value.toLowerCase();
  insertWord(letter.toLowerCase());
  updateLetter();
  _Trying(letter);
  if (_trying == 0) {
    _newGame("perdiste");
    }
  document.getElementById("enteredWord").value = "";
}


function checkBox() {
  _check = document.createElement("input");
  if (document.getElementById("check").checked == true) {
    _check.setAttribute("type", "text");
    _check.setAttribute("id", "answer");
    _check.setAttribute("onchange", "Answer()")
    document.body.appendChild(_check);
  }
  else {
    answer = document.getElementById('answer');
    answer.parentNode.removeChild(answer);
  }

}

function Answer() {
  respuesta = document.getElementById('answer').value.toLowerCase().split('');
  if ( respuesta.toString() == _lista.toString()) {
      _newGame("Ganaste!");
  }
  else {
    alert("Sigue intentando");
    document.getElementById("check").checked = false;
    answer = document.getElementById('answer');
    answer.parentNode.removeChild(answer);
  }
}

updateLetter();
alert("lest to play");
