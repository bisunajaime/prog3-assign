const firstName = document.getElementById('form:firstName');
const lastName = document.getElementById('form:lastName');
const email = document.getElementById('form:email');
const contactNo = document.getElementById('form:contactNumber');
const age = document.getElementById('form:age');
const fnError = document.getElementById('fnError')
const lnError = document.getElementById('lnError')
const eError = document.getElementById('eError')
const conError = document.getElementById('conError')
const ageError = document.getElementById('ageError')
const redB = "2px solid red";
const greenB = "2px solid #6fde79";
firstName.addEventListener('keyup', (e) => {
	if(firstName.value.trim().length < 3 || firstName.value.trim().length > 24) {
		firstName.style.border = redB
		fnError.innerHTML = "Invalid length of " + firstName.value.trim().length
	}else {
		firstName.style.border = greenB
		fnError.innerHTML = ""
	}
})

lastName.addEventListener('keyup', () => {
	if(lastName.value.trim().length < 2 || lastName.value.trim().length > 24) {
		lastName.style.border = redB
		lnError.innerHTML = "Invalid length of " + (lastName.value.length)
	}else {
		lastName.style.border = greenB
		lnError.innerHTML = ""
	}
})

email.addEventListener('keyup', () => {
	let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	if(email.value.match(regex)) {
		email.style.border = greenB
		eError.innerHTML = ""
	}else {
		email.style.border = redB
		eError.innerHTML = "Email format must follow (example@example.com)"
	}
})

contactNo.addEventListener('keyup', () => {
	let regex = /\d{4}-\d{3}-\d{4}/;
	if(contactNo.value.match(regex)) {
		contactNo.style.border = greenB
		conError.innerHTML = ""
	}else {
		contactNo.style.border = redB
		conError.innerHTML = "Invalid number format must follow (0XXX-XXX-XXX)"
	}
})

age.addEventListener('keyup', () => {
	if(age.value < 18 || age.value > 70) {
		age.style.border = redB
		ageError.innerHTML = "Age must be 18 and above"
	} else {
		age.style.border = greenB
		ageError.innerHTML = ""
	}
})

anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
