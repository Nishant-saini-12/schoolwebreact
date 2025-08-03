function Footer() {
    return (
        <footer style={{
            padding: '60px 100px',
            background: '#03011c',
            display: 'flex',
            gap: 48

        }}>
            <div style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>codeSchool</h1>
                <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci dolor necessitatibus delectus ducimus ab, voluptatibus laboriosam debitis accusantium expedita ullam. Mollitia omnis eveniet dicta quis tempora ipsam iste? Officiis.</p>
            </div>

            <div  style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>UseFull links</h1>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: "column",
                    gap: 13

                }}>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Home</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Teachers</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Holidays</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Talks TO Us</a>
                    </li>
                </ul>


            </div>

            <div  style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>Social links</h1>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: "column",
                    gap: 13

                }}>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>youtube</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>FAcebook</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Instagram</a>
                    </li>

                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>twitter</a>
                    </li>
                </ul>


            </div>

            <div style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>codeSchool</h1>
                <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci dolor necessitatibus delectus ducimus ab, voluptatibus laboriosam debitis accusantium expedita ullam. Mollitia omnis eveniet dicta quis tempora ipsam iste? Officiis.</p>
            </div>

            <div style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>enquiry</h1>


                <form style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:18
                }}>
                    <input
                    name="Fullname"
                    placeholder="FullName"
                    type="text"
                    required
                    style={{
                        border: 'none',
                        padding: 12,
                        borderRadius:4,
                    }}/>

                     <input
                    name="Email"
                    placeholder="Email"
                    type="email"
                    required
                    style={{
                        border: 'none',
                        padding: 12,
                        borderRadius:4,
                    }}/>

                     <textarea
                    name="Email"
                    placeholder="what is your query"
                    
                    style={{
                        border: 'none',
                        padding: 12,
                        borderRadius:4,
                    }}/>

                    <button style={{
                        background:'dodgerblue',
                        width:'fit-content',
                        color:'white',
                        borderRadius:5,
                        padding:'13px'
                    }}>Submit </button>
                    </form>
            </div>


        </footer>

    )
}
export default Footer;