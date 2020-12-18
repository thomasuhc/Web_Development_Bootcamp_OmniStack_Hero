import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
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
                <form>
                    <input placeholder="Name of Organization"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                         <input placeholder="City"/>
                         <input placeholder="State" style={{ width: 100 }}/>
                    </div>

                    <button className="button" type="submit">Register</button>
                  
                </form>
            </div>
        </div>
    )
}