import { useState } from "react";

export default function FormCheckout(props) {
    const [formData, setFormData] = useState(
        {username: "", phone: "", email: ""}
    );

    function handleInputChange(event){
        const {name, value} = event.target;
        const newFormData = {...formData}
        newFormData[name]=value;
        setFormData(newFormData)
    }
    
    function resetForm(){
        setFormData ({username: "", phone: "", email: ""});
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("form enviado...")
        props.handleCheckout(formData)
    }

    function handleNumberInputChange(event){
        (![1,2,3,4,5,6,7,8,9,0].includes(Number(event.key))) && event.preventDefault();
    }

    console.log("aca...")

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre
                value={formData.username}
                <input onChange={handleInputChange}
                type="text" 
                name="username"/>
            </label>
            <label>Email
                value={formData.email}
                <input onChange={handleInputChange}
                type="email" 
                name="email"/>
            </label>
            <label>Teléfono
                value={formData.phone}
                <input onChange={handleInputChange}
                onKeyDown={handleNumberInputChange}
                type="tel" 
                name="phone"/>
            </label>
            <button type="submit">Enviar</button>
            <button type="button" onClick={resetForm}>Limpiar Form</button>

        </form>
    )
}