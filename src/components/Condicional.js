import { useState } from "react"

function Condicional(){

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()
    //setando os valores das constantes de acordo com o input utilizando o state
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail()
    }
    //fazendo uma condicao de mostrar o email apenas se o usuario enviar algo
    //e fazendo um butao para resetar a variavel
    return(
        <div>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional