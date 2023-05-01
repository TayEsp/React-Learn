function Lista({itens}){

    return(
        <>
        <h3>Lista de coisas: </h3>
        {itens.length > 0 ? (
            itens.map((item, index) => 
            (<p key={index}>{item}</p>))
            ) : (<p>Nao há itens listados</p>)
        }
        </>
    )
}

export default Lista