function generateNumber() {

    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    const h2 = document.querySelector('.result')
    
    // Agregar la clase de animación
    h2.classList.add('girando')
    
    // Esperar a que termine la animación para mostrar el resultado
    setTimeout(() => {
        h2.textContent = result
        h2.classList.remove('girando')
    }, 1000)
    }