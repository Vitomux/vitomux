let gastoTotal
let participantes
let voluntarios = [ ]

function init( ) {
    gastoTotal = parseInt( prompt('Cuánto dinero gastaron?') )
    participantes = parseInt( prompt('Cuántos son?') )

    console.log(`${participantes} personas`);
    console.log(`Total = $${gastoTotal}`);

}



const añadirVoluntario = ( ) => {  
    let nombre
    let dinero
    let masVoluntarios
    
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
        
        } while ( masVoluntarios && voluntarios.length <= participantes );
        
        console.log( voluntarios )
        return voluntarios;
    }
    

    
    const parteDeCadaUsuario = ( ) => {
        let partes = (gastoTotal / participantes).toFixed(2)
        alert( `Cada uno gastó $${ partes }` )
        console.log(`Por persona $${ partes }`);
        
        
        for ( i = 0; i < voluntarios.length; i++ ) {
            let voluntario = voluntarios[ i ].nombre
            let gastoVoluntario =  voluntarios[ i ].dinero
            let parteVoluntario = (gastoVoluntario -  partes).toFixed(2)

            if ( parteVoluntario <= 0 ) { 
                    alert( `${voluntario} debe $${parteVoluntario* -1}` )
            } else {
                    alert( `A ${voluntario} le deben $${parteVoluntario}` ) 
        };

        console.log(voluntario);
        console.log(parteVoluntario);
        
    };
    
}


init( );
añadirVoluntario( );
parteDeCadaUsuario( );


