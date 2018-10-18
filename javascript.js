password();	

function password(argument) {
 	var s = prompt( "Введите пароль", '');
if (s==53212) {
	return;
}else {
	alert('Неверный пароль');
	password();
 } }
