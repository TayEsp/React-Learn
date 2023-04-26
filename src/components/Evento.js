//Criando metodo para o evento de onClick
//utilizando de propiedades para diferenciar cada evento tambem
function Evento({numero}){

    function meuEvento(){
        console.log(`Fui ativado! ${numero}`)
    }

    return(
        <div>
            <p>Clique para dispara um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento