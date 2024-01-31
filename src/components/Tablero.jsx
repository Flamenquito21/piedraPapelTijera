import Jugador from './Jugador';

export default function Tablero() {
    var ganador = '';

    const father = (event) =>{
        event.preventDefault();
        console.log(event.currentTarget.opcion.value)
        let valor = event.currentTarget.opcion.value;
        
    }

    function jugar(jugador1, jugador2){
        let ganadores = {
            'piedra' : 'tijera',
            'papel' : 'piedra',
            'tijera' : 'papel'
        };

        if(jugador2 == ganadores[jugador1]){ //Jugador 1 ha ganado

        } else if (jugador2 == jugador1) { //Empate

        } else{ //Gana jugador 2

        }

        
    }

    return (
        <>
            <form action="" onSubmit={father}>
                <Jugador tipo="ju"/>
                <Jugador tipo="ia"/>
            </form>
           
            <button onClick={jugar()}>Jugar una vez</button>
        </>

    );
}




