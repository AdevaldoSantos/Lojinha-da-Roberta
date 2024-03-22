const button = document.getElementById('bntSubmit')

const addLoading = () => {
    button.innerHTML='<img src="img/carregando.png" class="loading" alt="carregando">'
}

const removeLoading = () => {
    button.innerHTML='Enviar'
}

const handleSubmit = (event) => {
    event.preventDefault()
    addLoading()

    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const numberPhone = document.getElementById('phone').value
    const tellMe = document.getElementById('tellMe').value

    fetch('https://api.sheetmonkey.io/form/wo324ksu1YTghDSwEfXF4b', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, lastName, numberPhone ,email, tellMe})
    }).then(() => removeLoading())
}

document.querySelector('form').addEventListener('submit', handleSubmit)