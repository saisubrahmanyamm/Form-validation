function submit() {
	var company = document.getElementById('companyName').value;
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phoneNumber').value;
	var mail = document.getElementById('email').value;
	var pRegExp = /^\+?([0-9]{2})\)?[-(). ]?([0-9]{5})[-(). ]?[-(). ]?([0-9]{5})[-(). ]?$/;
	var eRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,3}$/;
	if (company && name && pRegExp.test(phone) && eRegExp.test(mail))
		console.log(company + "/" + name + "/" + phone + "/" + mail);
}
function reset() {
	document.getElementById('companyName').value = "";
	document.getElementById('name').value = "";
	document.getElementById('phoneNumber').value = "";
	document.getElementById('email').value = "";
}