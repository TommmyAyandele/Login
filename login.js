function validate()
{
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if(username=== "Tomiwa" && password==="Tommy1461")
	{
		alert('Login succesful');
		return false;
}
else
{
	alert("Attempt to Login failed");
}
}