addEventListener("DOMContentLoaded", (e) => {
    let span = document.querySelector('#pago')
    let calculo = document.querySelector('#horaTrabajo')
    let btnClose = document.querySelector("#close")
    let ventane = document.querySelector("dialog");
    let cont = 0;

    calculo.addEventListener('submit', (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let valorHora = 5208.33
        let myHour = dataInput.hora
        myHour *= valorHora
        span.innerHTML = myHour

        ventane.showModal();
        if (cont < 50) {
            let myTabla = document.querySelector("tbody");
            myTabla.insertAdjacentHTML("beforeend", `
                <tr>
                    <td>${dataInput.nom}</td>
                    <td>${dataInput.hora}</td>
                    <td>${myHour}</td>
                </tr>
                `);
            cont++;
        }
    })

    btnClose.addEventListener("click", (e) => {
        ventane.close();
    })
})