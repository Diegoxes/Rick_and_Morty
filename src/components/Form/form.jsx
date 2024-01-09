import {React,useState} from "react";
import "./Form.css";

export default function Form({Login}){


const [user,setUser]=useState({email:"",    
    password:""});


function handleChange(evento){
    
    

    setUser({
        ...user,[evento.target.name]:evento.target.value,
    }

    )

   

    setErrors(validate({...user,[evento.target.name]:evento.target.value}))
}



    function handleSubmit(evento){
        evento.preventDefault()

        if(!errors.email && !errors.password){
            Login(user);
        }
        else{
            window.alert("Comprueba los requisitos para tu contraseña o correo")
        }

    }




function validate(user){
    let errors={};

    if (!user.email) {
        errors.email = "Enter your email";
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(user.email)){
        errors.email="Invalid Email";
    }
    if(user.email.length >= 35){
        errors.email="Your email is more large";
    
    }

    if(!/\d/.test(user.password)){
        errors.password="Your password has not numbers"
    }
    if(user.password.length<6 || user.password.length>12){
        errors.password="Your password should be in the range of 6 to 12 characters."
    }

     return errors;
    

}

        const [errors,setErrors]=useState({email:"",
    password:""});










    return(
        <div className="form">
            <form onSubmit={handleSubmit}>

                <div id="idlogin">

                <label>Email</label>
                <input name="email"type="text" value={user.email} placeholder="Email..." 
                onChange={handleChange}/>
                {/*<label style={{ color: "black" }}>{user.email}</label>*/}
                {errors.email && <span style={{color:"red",fontSize:"12px"}}>{errors.email}</span>}

                <label>Password</label>
                <input  name="password" value={user.password} type="password" 
                 onChange={handleChange} placeholder="Password..."/>
                {/* <label style={{ color: "black" }}>{user.password}</label>*/}
                 {errors.password && <span>{errors.password}</span>}

                <button className="botonsub" >Login</button>

                </div>
            </form>
        </div>
    )
}