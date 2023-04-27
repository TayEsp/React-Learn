
import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log(`ativando o primeiro evento!`)
    }

    function segundoEvento(){
        console.log("ativando o segundo evento")
    }
    //passando um metodo pela props
    return(
        <div>
            <p>Clique para dispara um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento