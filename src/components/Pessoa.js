//utilizando structring, dessa forma nao precisando escrever a todo momento props
//pois ja foi passado qual parametros que seram passados para cada variavel
function Pessoa({nome, idade, profissao, foto}){
    
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )

}

export default Pessoa