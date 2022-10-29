addEventListener("DOMContentLoaded", (e)=> {

    let numero = document.querySelector('#numero');
    let respuesta = document.querySelector('#validacion');
    
    
    numero.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let dataInput = Object.fromEntries(new FormData(e.target));
        let number = dataInput.num;
    
    
        if (!Number.isInteger(number)) {
            respuesta.innerHTML = 'El número debe ser entero';
        }
    
        if (number <= 0) {
            respuesta.innerHTML = 'El número debe ser positivo';
        }
    
        let acum = 0;
    
        for ( i=1; i <= number/2 ; ++i) {
            
            if (number % i == 0) {
    
                acum += i;
    
                if (acum != 0 && acum == number) {
                    respuesta.innerHTML = 'El número que ingresaste es perfecto'
                }
                else {
                    respuesta.innerHTML = 'El número que ingresaste NO es perfecto'
                }
            } 
            
        }
    
        })
        
    })