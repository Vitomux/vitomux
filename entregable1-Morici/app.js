/* LOGICA: 
Se trata de una app para calcular gastos entre partes. 
Situación: en una reunión un grupo de personas sale a comprar (los voluntarios)
y paga el total, eventualmente se calcula entre los voluntarios y los demas 
como repartirse los gastos.
*/
let gastoTotal // el total de la compra
let participantes // el total de personas ( voluntarios incluidos )
let voluntarios = [ ] // las personas que pusieron el dinero para la compra

function init( ) {
    participantes = parseInt( prompt('Cuántos son?') )
    console.log(`${participantes} personas`);
};


const añadirVoluntario = ( nombre, dinero, masVoluntarios ) => {  

    do {
        nombre = prompt( "¿Quién prestó dinero?" )
            if (  nombre === null ) {
                alert("Cuando esté listo, reinicie la página")
                break
            }
            if ( !nombre ) {
                alert("El nombre ingresado no es válido")
                continue
            }

        dinero = parseInt(prompt( "¿Cuanto dinero prestó?" ))
            if (dinero === null) {
            alert("Cuando esté listo, reinicie la página")
        }
            if ( isNaN( dinero ) || dinero <= 0 ) {
                alert('Ingresá valores válidos')
                continue
            }
            
            voluntarios.push({ nombre, dinero });
            masVoluntarios = confirm( '¿Agregar mas voluntarios?' )
        
       } while ( masVoluntarios && voluntarios.length < participantes );
        
        console.log( voluntarios )
        return voluntarios;
    }
    

    
    const parteDeCadaUsuario = ( ) => {
     let gastoTotal = 0
      voluntarios.forEach(voluntario =>{
        gastoTotal += voluntario.dinero
      });
          console.log(`${participantes} personas`);
    console.log(`Total = $${gastoTotal}`);
      
        let partes = ( gastoTotal / participantes ).toFixed(2)
        if ( !partes || isNaN(partes) ) { 
            alert(`No hay partes declaradas`)
        } else {
        alert( `Cada uno gastó $${ partes }` )
        console.log(`Por persona son $${ partes }`);
        }
        
        for ( i = 0; i < voluntarios.length; i++ ) {
            let voluntario = voluntarios[ i ].nombre
            let gastoVoluntario =  voluntarios[ i ].dinero
            let parteVoluntario = ( gastoVoluntario -  partes ).toFixed(2)

            if ( parteVoluntario <= 0 ) { 
                    alert( `${ voluntario } debe $${ parteVoluntario* -1 }` )
                    console.log( `${ voluntario } debe $${ parteVoluntario* -1 }`)
            } else {
                    alert( `A ${ voluntario } le deben $${ parteVoluntario }` )
                    console.log( `${ voluntario } tiene que cobrarse $${ parteVoluntario }` )
        };

    };
    
}

init();
añadirVoluntario( );
parteDeCadaUsuario( );







