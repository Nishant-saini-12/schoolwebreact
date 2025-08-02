const Navbar = () => {
    return (
        // <h1>nishant</h1>
        <nav style={{
            // backgroundColor:'red', 
            display:'flex',
            justifyContent:'space-between',
            padding:'0 59px',
            boxShadow:'0.1 8px 8px 0 rgba(0,0,0,0.30)'
        }}>
            <div style={{
                display:'flex',
                gap:'8px',
                alignItems:'center'
                }}>
                <img
                    src="./images/image.png"
                    width="68"
                />

                <h1>CodeSchool</h1>

            </div>

            <ul style={
                {
                    listStyle:"none",
                    padding:0,
                    margin:0,
                    display:'flex',
                    // gap:'9px'

                }
            }>
                <li><a href="/" style={
                    {
                        textDecoration:'none',
                        color:'#323232',
                        fontSize:'17px',
                        background:'red',
                        padding:32
                        
                    }
                }>Home</a>
                <a href="/" style={
                    {
                        textDecoration:'none',
                        color:'#323232',
                        fontSize:'17px',
                        background:'red',
                        padding:32
                        
                    }
                }>contect us</a>
                <a href="/" style={
                    {
                        textDecoration:'none',
                        color:'#323232',
                        fontSize:'17px',
                        background:'red',
                        padding:32
                        
                    }
                }>services</a>
                 </li>
                
              
            </ul>

        </nav>


    )
}

export default Navbar