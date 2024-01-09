import React from "react";
import Form from "../../components/Form/form";
import "./landingPage.css";

export default function LandingPage(props){
    const {Login}=props;

    return(
            <div className="page">
                <Form Login={Login}/>
            </div>




    )
}