//Criando metodo para o evento de onSubmit

function Forms(){
    //nessa funcao pegamos o evento e previnimos de ser mandado pro back
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuario!")
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome:"/>
                </div>
                <div>
                    <input type="submit" value= "enviar"/>
                </div>
            </form>  
        </div>
    )

}

export default Forms