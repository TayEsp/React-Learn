//criando componente utilizando fragmento
//cria sem elemento pai
import Item from './Item'

function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari"/>
                <Item marca="fiat"/>
            </ul>
        </>
    )
}

export default List