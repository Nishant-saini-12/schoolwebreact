import { Link } from "react-router-dom";

import 'remixicon/fonts/remixicon.css'
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
                    <li><a href="/" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Home</a>
                    </li>

                    <li><a href="/teachers" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Teachers</a>
                    </li>

                    <li><a href="/holidays" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Holidays</a>
                    </li>

                    <li><a href="*" style={{
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
                    }}>Socical links</h1>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: "column",
                    gap: 13

                }}>
                    <li><a href="https://www.youtube.com/watch?v=ZgyPuS8wNOg&t=3297s" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        <i className="ri-youtube-fill" style={{marginRight:7}}></i>
                        YOutube
                        </a>
                    </li>

                    <li><a href="https://www.google.com/search?q=facebook&rlz=1C1ONGR_enIN1053IN1053&oq=face&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyCQgCEEUYORiABDINCAMQABiDARixAxiABDIGCAQQBRhAMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEIMTUxMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}> <i className="ri-facebook-fill" style={{marginRight:7}}></i>
                        YOutube</a>
                    </li>

                    <li><a href="https://www.google.com/search?q=instagram+login&rlz=1C1ONGR_enIN1053IN1053&oq=ins&gs_lcrp=EgZjaHJvbWUqEggDEAAYQxiDARixAxiABBiKBTIGCAAQRRg8MhIIARAuGEMYxwEY0QMYgAQYigUyDggCEEUYJxg5GIAEGIoFMhIIAxAAGEMYgwEYsQMYgAQYigUyDQgEEAAYgwEYsQMYgAQyCggFEAAYsQMYgAQyBggGEEUYPDIGCAcQRRg80gEIMjY1MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}> <i className="ri-instagram-fill" style={{marginRight:7}}></i>
                        YOutube</a>
                    </li>

                    <li><a href="https://www.linkedin.com/in/nishant-saini-455682295/" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}> <i className="ri-youtube-fill" style={{marginRight:7}}></i>
                        LinkedIn</a>
                    </li>

                </ul>


            </div>

            <div style={{width:'100%'}}>
                <h1 style={
                    {
                        color: 'white',
                        fontWeight: '500'
                    }}>codeSchool</h1>
            <i className="ri-hotel-line" style={{color:'white', fontSize:86}}></i>
            <i className="ri-inbox-unarchive-line" style={{color:'white', fontSize:86}}></i>
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