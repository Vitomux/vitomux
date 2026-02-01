/* LOGICA: 
Se trata de una app para calcular gastos entre partes. 
Situación: en una reunión un grupo de personas sale a comprar (los voluntarios)
y paga el total, eventualmente se calcula entre los voluntarios y los demas 
como repartirse los gastos.
*/

const personasInput = document.getElementById("personas")
const nombreInput = document.getElementById("nombre")
const dineroInput = document.getElementById("dinero")
const datosContainer = document.getElementById("datos")
const datosTotal = document.getElementById("datosTotal")
const totalFInal = document.getElementById("final")
const personasFinal = document.getElementById("personasFinal")
const parteFInal = document.getElementById("parteFinal")
const resultados = document.getElementById("resultados")
const succesImg = document.getElementById('succesImg');
const historial = document.getElementById('historial')

let voluntarios = [ ] 
let nombre = ""
let dinero = ""
let parteVoluntario = ""
let partePorPersonas = ""
let personas = ""
let gastoTotal = 0

function getVoluntarios( ) {
    nombre = nombreInput.value
    dinero =  parseInt(dineroInput.value)

        if ( !nombre || isNaN( dinero ) ){
                nombreInput.value = "Error"
                dineroInput.value = "Error"

        } else {
                const nuevoVoluntario = { nombre, dinero }
                voluntarios.push(nuevoVoluntario)
                gastoTotal += nuevoVoluntario.dinero
                console.log(voluntarios);

                datosContainer.innerHTML += `
                        <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                            <p><strong>Nombre:</strong> ${ nuevoVoluntario.nombre }</p>
                            <p><strong>Aporte:</strong> $${ nuevoVoluntario.dinero }</p>
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

                succesImg.removeAttribute('hidden')
                personasInput.setAttribute('hidden', '')
                return personas
        }
}

function getData( ){

    totalFInal.innerText = `$${gastoTotal}`   
    personasFinal.innerText = personas
    partePorPersonas = (gastoTotal/personas).toFixed(2)
    parteFInal.innerText =`$${ partePorPersonas }`

    voluntarios.forEach( ( voluntario, i ) => {

        parteVoluntario = ( voluntario.dinero - partePorPersonas ).toFixed(2)

        if ( parteVoluntario <= 0 ) { 
            resultados.innerHTML += `
                <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                    <p><strong>${ voluntario.nombre }</strong> debe</p>
                    <p> $${ parteVoluntario * -1 }</p>
                </div>`;
        } else {
            resultados.innerHTML += `
                <div class = "flex flex-row p-2 justify-between mb-6 overflow-hidden h-36.5">
                        <p>A <strong>${ voluntario.nombre }</strong> le deben </p>
                        <p>$${ parteVoluntario }</p>
                </div>`;
            };
    })
}

function restart( ){
    voluntarios = [ ] 
    nombre = ""
    dinero = ""
    parteVoluntario = ""
    partePorPersonas = ""
    personas = ""
    gastoTotal = 0
    
    totalFInal.innerText = "$00.00"   
    personasFinal.innerText = "00"
    parteFInal.innerText = "$00.00"
    resultados.innerHTML = ""
    datosContainer.innerHTML = ""
    datosTotal.innerText= ""
    personasInput.value = ""
    personasInput.removeAttribute('hidden')
    succesImg.setAttribute('hidden', '')

}

function save( ){
    let fecha = new Date
    localStorage.setItem('Dia', fecha.toLocaleDateString( ))
    localStorage.setItem('Hora', fecha.toLocaleTimeString( ))
    localStorage.setItem('Total', gastoTotal)
    localStorage.setItem('Personas', personas)
    localStorage.setItem('Por persona', partePorPersonas)
    localStorage.setItem('Voluntarios', JSON.stringify( voluntarios ) )

    let savedDay = localStorage.getItem('Dia')
    let savedHour = localStorage.getItem('Hora')
    let savedTotal = localStorage.getItem('Total')
    let savedPersonas = localStorage.getItem('Personas')
    let savedParte = localStorage.getItem('Por persona')
    let savedVoluntarios = localStorage.getItem('Voluntarios')

    historial.innerHTML += `
        <div class="p-4 justify-between">
            <p><strong>${ savedDay }</strong> a las <strong>${savedHour}</strong></p>
            <p><strong>Gasto total</strong> $${ savedTotal }</p>
            <p><strong>Personas</strong> ${ savedPersonas }</p>
            <p><strong>cada uno gastó </strong>$${ savedParte }</p>
            <p>${ savedVoluntarios }
        </div>
        <div class="h-[0.5px] bg-[#00A18E]"></div>
    `

    restart( )
}


function deleteHistory( ){
    historial.innerHTML = " "
    localStorage.clear( )
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

        } else if ( button.innerText === "Reiniciar"){
            restart( )
        } else if ( button.innerText === "Guardar"){
            save( )
            console.log(localStorage);
            
        } else if ( button.innerText === "Borrar historial"){
            deleteHistory( )
            console.clear()
        }
    })
    
})