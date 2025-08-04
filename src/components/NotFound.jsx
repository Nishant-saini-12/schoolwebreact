import Footer from "./Footer"
const NotFound=()=>{
    return (
        <div  style={{
                background:'none',
                height:'100vh',
                display:'flex',
                flexDirection:"column",
                justifyContent:'cemter',
                alignItems:'center',
                padding:'19px 12px'
             

                
                }} >
        
            <img src="./images/NotDataFound.png" alt="" width="729px"/>
               <h1 style={{
                color:'#6C63FF'
               }}>page not found!!!</h1>
              <Footer/>
        </div>
      
    )
}

export default NotFound