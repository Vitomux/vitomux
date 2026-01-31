/* LOGICA: 
Se trata de una app para calcular gastos entre partes. 
Situación: en una reunión un grupo de personas sale a comprar (los voluntarios)
y paga el total, eventualmente se calcula entre los voluntarios y los demas 
como repartirse los gastos.
*/

const personasInput = document.getElementById("personas")
const nombreInput = document.getElementById("nombre")
const dineroInput = document.getElementById("dineroVol")
const datosContainer = document.getElementById("datos")
const datosTotal = document.getElementById("datosTotal")
const totalFInal = document.getElementById("final")
const personasFinal = document.getElementById("personasFinal")
const parteFInal = document.getElementById("parteFinal")
const resultados = document.getElementById("resultados")

let voluntarios = [ ] // las personas que pusieron el dinero para la compra
let nombreVol = ""
let dineroVol = ""
let parteVoluntario = ""
let partePorPersonas = ""
let personas = ""
let gastoTotal = 0

function getVoluntarios( ) {
    nombreVol = nombreInput.value
    dineroVol =  parseInt(dineroInput.value)

        if ( !nombreVol || isNaN( dineroVol ) ){
                nombreInput.value = "Error"
                dineroInput.value = "Error"

        } else {
                const nuevoVoluntario = { nombreVol, dineroVol }
                voluntarios.push(nuevoVoluntario)
                gastoTotal += nuevoVoluntario.dineroVol
                console.log(voluntarios);

                datosContainer.innerHTML += `
                        <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                            <p><strong>Nombre:</strong> ${ nuevoVoluntario.nombreVol }</p>
                            <p><strong>Aporte:</strong> $${ nuevoVoluntario.dineroVol }</p>
                        </div> `;
            
                datosTotal.innerText= `$${ gastoTotal.toFixed(2) }`

                nombreInput.value = ""
                dineroInput.value = ""
        }
}

function getPersonas( ){

    let valorIngresado = parseInt(personasInput.value)
    
        if ( isNaN(valorIngresado) ) {
                personasInput.value = "Error"
        } else { 
                valorIngresado
                personas = valorIngresado
                console.log(personas);

                const succesImg = document.createElement('img');
                succesImg.src = 'okey_.svg';
                succesImg.alt = 'Success';
                succesImg.style.width = '80px'
                personasInput.replaceWith( succesImg )

                return personas
        }
}

function getData( ){

    totalFInal.innerText = gastoTotal   
    personasFinal.innerText = personas
    partePorPersonas = (gastoTotal/personas).toFixed(2)
    parteFInal.innerText =`$${ partePorPersonas }`

    voluntarios.forEach( ( voluntario, i ) => {

        parteVoluntario = ( voluntario.dineroVol - partePorPersonas ).toFixed(2)
    
        if ( parteVoluntario <= 0 ) { 
            resultados.innerHTML += `
                <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                    <p><strong>${ voluntario.nombreVol }</strong> debe</p>
                    <p> $${ parteVoluntario * -1 }</p>
                </div>`;
        } else {
            resultados.innerHTML += `
                <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                        <p><strong>${ voluntario.nombreVol }</strong> le deben </p>
                        <p>$${ parteVoluntario }</p>
                </div>`;
            };
    })
}

const buttons = document.querySelectorAll('button')

buttons.forEach( button => {
    
    button.addEventListener( 'click', ( ) => {

        if ( button.innerText === "Sumar Voluntarios") {
            getVoluntarios( )

        } else if ( button.innerText === "Confirmar" ){
            getPersonas( )

        } else if ( button.innerText === "Calcular" ){
            getData( )

        }
        
    })
    
})