import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'


export default function NewIncident() {
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
                <form>
                    <input placeholder="Case title"/>
                    <textarea placeholder="Description"/>
                    <input placeholder="Price"/>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}