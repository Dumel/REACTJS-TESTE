import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Pai" lancamento={7}/>
                <Item marca="Filho" lancamento={7}/>
                <Item marca="Espiríto Santo" lancamento={7}/>
            </ul>
        </>
    )
}

export default List