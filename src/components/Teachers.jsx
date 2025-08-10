import Navbar from "./Navbar"
import Footer from "./Footer"
const Teachers = () => {

    const teachers=[
        {
            image:'./images/a.png',
            name:'Nishant Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/b.png',
            name:'lavish Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/c.png',
            name:'anshul Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/d.png',
            name:'rambru Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/e.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/a.png',
            name:'reshu gupta',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/a.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/f.png',
            name:'reshu gupta',
             que:'BTECH(CSE)'
        }
        ,    {
            image:'./images/a.png',
            name:'Nishant Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/b.png',
            name:'lavish Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/c.png',
            name:'anshul Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/d.png',
            name:'rambru Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/e.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/a.png',
            name:'reshu gupta',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/a.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/f.png',
            name:'reshu gupta',
             que:'BTECH(CSE)'
        },    {
            image:'./images/a.png',
            name:'Nishant Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/b.png',
            name:'lavish Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/c.png',
            name:'anshul Saini',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/d.png',
            name:'rambru Saini',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/e.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/a.png',
            name:'reshu gupta',
            que:'BTECH(CSE)'
        }
        ,
           {
            image:'./images/a.png',
            name:'kunal garg',
            que:'BTECH(CSE)'
        },
        {
            image:'./images/f.png',
            name:'reshu gupta',
             que:'BTECH(CSE)'
        },{
                        image:'./images/f.png',
            name:'reshu gupta',
             que:'BTECH(CSE)'
        }
        
        
        
        
        
    ]


    return (

        <div>

            <Navbar />
            <div>
                <header style={{
                    height: 280,
                    backgroundImage: 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)',
                    display: "flex",
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white',
                        gap: '40px'
                    }}>
                        <i className="ri-presentation-fill"></i>
                        Teachers</h1>
                </header>

                <section style={{
                    // height:2000,
                    // background:'red',
                    width: '80%',
                    margin: '0 auto',
                    padding: '80px 0',
                    display: "flex",
                    flexWrap: 'wrap',
                    gap: '24px',
                    justifyContent: 'space-between'
                }}>

                    {
                    teachers.map(function(item,index){
                            return(
                                <div style={{width:'20%'}} key={index}>
                                    <img src={item.image} alt={teachers.image} />
                                    <h2 style={{padding:0,marginBottom:4}}>{item.name}</h2>
                                    <p style={{padding:0,margin:0,color:'gray'}}>{item.que}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Teachers 
