import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormValidate } from './FormValidate';


export const ListAddItem = ({ addUser }) => {

    const [formValues, handleInputChange, reset] = useForm({
        username: '',
        name: '',
        email: '',
        phone: ''
    });
    const { username, name, email, phone } = formValues;
    const [error, setError] = useState({});

    ;



    /**
     * -------------------------------------------------------
     * @summary handleSubmit
     * @description Valida datos para enviar formulario
     * al guardar
     * -------------------------------------------------------
     */
    const handleSubmit = (ev) => {
        let count = 0;
        ev.preventDefault();
        console.log('error :>> ', Object.keys(error).length);
        setError(FormValidate(ev.target));

        if (Object.keys(error).length > 2) {
            console.log('Ready modificado  formulario vacio');
            count = count + 1;
        }
        else if (Object.keys(error).length > 0 && Object.keys(error).length < 3) {
            console.log('Formulario Enviado');
            addUser(
                ev.target.id.value,
                ev.target.username.value,
                ev.target.name.value,
                ev.target.email.value,
                ev.target.phone.value
            );
            reset();
        }
        else {
        }
    };






    return (
        <form className="container_user" onSubmit={handleSubmit} >
            <div className="containerInput">
                <div className="input-user">
                    <input type="text" name="username" placeholder="Username" onChange={handleInputChange} value={username} />
                    {error.username && <p>{error.username}</p>}
                </div>
                <div className="input-user">
                    <input type="text" name="name" placeholder="Complete Name" onChange={handleInputChange} value={name} />
                    {error.name && <p>{error.name}</p>}
                </div>
            </div>

            <div className="containerInput">
                <div className="input-user">
                    <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={email} />
                    {error.email && <p>{error.email}</p>}
                </div>
                <div className="input-user">
                    <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} value={phone} />
                    {error.phone && <p>{error.phone}</p>}
                </div>
            </div>
            <div className="containerInputBtn">
                <div className="input-user">
                    <button onSubmit={handleSubmit} >agregar</button>
                </div>
            </div>
        </form>
    )
}
