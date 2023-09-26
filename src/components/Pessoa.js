function Pessoa({nome, idade, profissao, foto}) {

    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h1>Nome: {nome} </h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )  
}

export default Pessoa