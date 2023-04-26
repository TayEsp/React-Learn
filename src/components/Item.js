import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

//criamos uma configuracao pro item na qual esta definindo os tipos do props
//marca deve ser string e sua passagem é obrigatoria
Item.protoType={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//define um valor padrao para o props
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item