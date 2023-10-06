import PropTypes from 'prop-types'

function Item({marca, lancamento}) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
}

export default Item