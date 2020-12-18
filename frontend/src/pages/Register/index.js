import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {

            const response = await api.post('ongs', data)

            alert(`ID: ${response.data.id}`)

            history.push('/');
            
        } catch (err) {
            alert("Try again")
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
               
                    <h1>Submit Your Organization Information</h1>
                    <p>Register and submit your "Animals Protection Organization" informations</p>

                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041" />
                        Back Home
                    </Link>

                    </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Name of Organization"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                         <input 
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                         <input 
                            placeholder="State" 
                            style={{ width: 100 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            />
                    </div>

                    <button className="button" type="submit">Register</button>
                  
                </form>
            </div>
        </div>
    )
}