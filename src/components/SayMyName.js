//props funciona como um objeto que le argumentos e os passa para o componentes
//possui um contrutor e atributos
//o nome da variavel deve ser igual na chamada e na leitura 

function SayMyName(props){

    return(
        <div>
            <p>Fala aí {props.nome}, tranquilo?</p>
        </div>
    )

}

export default SayMyName