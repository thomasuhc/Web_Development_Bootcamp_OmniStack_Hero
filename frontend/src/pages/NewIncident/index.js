import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from "../../services/api";

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');

        } catch (error) {
            alert("Erro register case, try again later!!");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
               
                    <h1>Submit new case</h1>
                    <p>Register your case information</p>

                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                        Back Cases
                    </Link>

                    </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Case title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}  
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}  
                    />
                    <input 
                        placeholder="Price"
                        value={value}
                        onChange={e => setValue(e.target.value)}  
                    />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}