import { href, Link } from 'react-router-dom'
import './Navbar.css'


const menus= [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Teachers',
        href: '/teachers'
    },
    {
        label: 'Holidays',
        href: '/holidays'
    },
    {
        label: 'Contect-Us',
        href: '/contect-us'
    }

]
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
                {
                    menus.map(function (items) {
                        return (
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '16px 24px'
                            }}><Link to={items.href} style={
                                {
                                    textDecoration: 'none',
                                    color: '#2f0a0aff',
                                    fontSize: '17',

                                }}>{items.label}</Link>
                            </li>
                        )
                    })


                }









            </ul>

        </nav>


    )
}

export default Navbar