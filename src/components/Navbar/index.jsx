import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        // <h1>nishant</h1>
        <nav style={{
            // backgroundColor:'red', 
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 59px',
           boxShadow: '1px 8px 8px 0 rgba(0,0,0,0.30)'

        }}>
            <div style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center'
            }}>
                <img
                    src="./images/image.png"
                    width="68"
                />

                <h1>CodeSchool</h1>

            </div>

            <ul style={
                {
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    // gap:'9px'

                }
            }>
                <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:'16px 24px'
                }}><Link to="/" style={
                    {
                        textDecoration: 'none',
                        color: '#2f0a0aff',
                        fontSize: '17',
                      
                    }}>Home</Link>
                </li>

                    <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:'16px 24px'
                }}><Link to="/Teachers" style={
                    {
                        textDecoration: 'none',
                        color: '#2f0a0aff',
                        fontSize: '17',
                 
                        '&:hover':{
                            
                        }    
                    }}>Teachers</Link>
                </li>

                    <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:'16px 24px'
                }}><Link to="/Holidays" style={
                    {
                        textDecoration: 'none',
                        color: '#2f0a0aff',
                        fontSize: '17',
                        
                        '&:hover':{
                            
                        }    
                    }}>Holidays</Link>
                </li>
{/* 
                    <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:'16px 24px'
                }}><Link to="/ContectUs" style={
                    {
                        textDecoration: 'none',
                        color: '#2f0a0aff',
                        fontSize: '17',  
                    }}>ContectUs</Link>
                </li> */}

                    <li style={{
                    display:'flex',
                    alignItems:'center',
                    padding:'16px 24px'
                }}><Link to="/Talk to us" className="contect-us-btn" style={
                    {
                        textDecoration: 'none',
                        color: '#2f0a0aff',
                        fontSize: '17',
                          backgroundColor:'dodgerblue',
                          padding:'16px 48px',
                          borderRadius: 5
                    }}>ContectUs</Link>
                </li>


            </ul>

        </nav>


    )
}

export default Navbar