const img = document.querySelector('.img')
const button = document.querySelector('.getFox')

async function pegarDadosApi(){
    img.innerText = ""
    const url = 'https://randomfox.ca/floof'
    const resultado = fetch(url)
        .then((response) => {
            return response.json()
        }).then((response) => {
            img.src = response.image
        })
}

pegarDadosApi()

button.addEventListener('click', (evento) => {
    pegarDadosApi()
})