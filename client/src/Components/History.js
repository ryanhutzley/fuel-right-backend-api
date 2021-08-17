function History({ setDisplayForm, user }) {

    setDisplayForm(true)

    let name = user.name.charAt(0).toUpperCase() + user.name.slice(1)

    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 id="pop" style={{textAlign: 'center', color: 'white'}}>{`${name}'s History`}</h1>
        </div>
    )
}

export default History