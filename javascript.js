password();	

function password(argument) {
 	var s = prompt( "Введите пароль", '');
if (s==5321) {
	return;
}else {
	alert('Неверный пароль');
	password();
 } }