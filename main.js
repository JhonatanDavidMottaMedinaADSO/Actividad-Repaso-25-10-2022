addEventListener("DOMContentLoaded", (e) => {

    let formulario = document.querySelector('#myForm')
    let boton = document.querySelector('#button')
    let ventana = document.querySelector('dialog')
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
    
        let sueldo = Number(dataInput.sueldoBase)
        let venta1 = Number(dataInput.venta1)
        let venta2 = Number(dataInput.venta2)
        let venta3 = Number(dataInput.venta3)
        let comisiones = Math.round((venta1 + venta2 + venta3)*0.10)
        let sueldoTotal = sueldo + comisiones;
        
        ventana.showModal();
        let tabla = document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${dataInput.nom}</td>
                <td>${dataInput.sueldoBase}</td>
                <td>${comisiones}</td>
                <td>${sueldoTotal}</td>
            </tr>`);
    })
    
    boton.addEventListener("click", (e) =>  {
        ventana.close();
    })
    
    })