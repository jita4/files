var deleteChar = document.getElementById ('resets');
var inputChar = document.getElementById ('text');
var itChar = document.form.message;
var lengthChar = form.message.value.length;
var elem = document.getElementById('count');
var putText = document.getElementById('block');
function countChar(){ 
    if  (lengthChar<200){
		elem.firstChild.nodeValue=lengthChar + 1;
		putText.firstChild.nodeValue=itChar.value;
    }
		else {
			false;
			elem.style.color = 'red';
			itChar.value=itChar.value.slice(0,200);
		}
}
function getClear(){ 
	if (lengthChar===0){
       elem.firstChild.nodeValue=0;
       putText.firstChild.nodeValue=' ';
       elem.style.color = 'black';
    }
}
deleteChar.addEventListener('click', getClear);
inputChar.addEventListener('input', countChar);