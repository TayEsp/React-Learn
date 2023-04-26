//forma de importar css nos componentes (nao achei efetivo, muito codigo pra algo que da pra fazer mais simples)
import styles from './SayMyName.module.css'

//props funciona como um objeto que le argumentos e os passa para o componentes
//possui um contrutor e atributos
//o nome da variavel deve ser igual na chamada e na leitura 
function SayMyName(props){

    return(
        <div className={styles.SayMyNameContainer}>
            <p className={styles.SayMyNameContent}>Fala aí {props.nome}, tranquilo?</p>
        </div>
    )

}

export default SayMyName