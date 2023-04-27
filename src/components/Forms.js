import {useState} from 'react'

function Forms(){
    //nessa funcao pegamos o evento e previnimos de ser mandado pro back
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Cadastrou o usuario!")
    }

    //o name da variavel e como eu vou alterar a variavel
    const [name, setname] = useState()
    const [password, setpassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome:" onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite o seu nome:" onChange = {(e)=>setpassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value= "enviar"/>
                </div>
            </form>  
        </div>
    )

}

export default Forms