/* --------- PROBLEMA ------------ */  

/* 
- amigos salen a comprar insumos para una fiesta. 

Juan (voluntario1 ) compra bebidas y comida. En total gasta $50.000. ( parteVoluntaria1 )

Pero Nacho (voluntario2) trae tambien hielo y bebidas. Dice que gasto $25.000 ( parteVoluntaria2 )

En total gastaron $75.000.

----------------------------------------------------------
*/


let gastoTotal
let participantes
let voluntarios = [ ]

function gastos ( ) {
    gastoTotal = parseInt( prompt('Cuánto dinero gastaron?') )
    participantes = parseInt( prompt('Cuántos son?') )

    console.log(`${participantes} personas`);
    console.log(`Total = $${gastoTotal}`);
    
    return participantes
}



const addVoluntario = ( ) => {  
    let nombre
    let dinero
    let masVoluntarios = true;
    
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
        
        } while ( masVoluntarios === true && voluntarios.length <= participantes );
        
        console.log( voluntarios )
        return voluntarios;
    }
    

    
    const deudas = ( ) => {
        let partes = gastoTotal / participantes
        let partesFix = partes.toFixed(2)
        alert( `Cada uno gastó $${ partesFix }` )
        console.log(`Por persona $${partesFix}`);
        
        
        for ( i = 0; i < voluntarios.length; i++ ) {
            let voluntario = voluntarios[ i ].nombre
            let gastoVoluntario =  voluntarios[ i ].dinero
            let parteVoluntario = gastoVoluntario -  partes
            let parteVolFixed = parteVoluntario.toFixed(2)

            if ( parteVoluntario <= 0 ) { 
                    alert( `${voluntario} debe $${parteVolFixed* -1}` )
            } else {
                    alert( `A ${voluntario} le deben $${parteVolFixed}` ) 
        };

        console.log(voluntario);
        console.log(parteVolFixed);
        
    };
    
}


gastos( );
addVoluntario( );
deudas( );
