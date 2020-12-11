function Procedures(props) {
    const procedureItems = props.proceduresList.map((p) => {
        return <li>{p.name}</li>
    })

    return (
        <>
        <h1>Procedures</h1>
        <ul>
            {procedureItems}
        </ul>
        </>
    )
}

export default Procedures