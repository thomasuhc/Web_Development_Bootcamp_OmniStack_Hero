import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'


export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, ASND</span>

                <Link className="button" to="/incidents/new">Submit new case</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Cases recorded</h1>

            <ul>
                <li>
                    <strong>CASE</strong>
                    <p>Case 032234</p>

                    <strong>DESCRIPTION</strong>
                    <p>some new case </p>

                    <strong>VALUE</strong>
                    <p>CAD$ 100.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASE</strong>
                    <p>Case 032234</p>

                    <strong>DESCRIPTION</strong>
                    <p>some new case </p>

                    <strong>VALUE</strong>
                    <p>CAD$ 100.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASE</strong>
                    <p>Case 032234</p>

                    <strong>DESCRIPTION</strong>
                    <p>some new case </p>

                    <strong>VALUE</strong>
                    <p>CAD$ 100.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASE</strong>
                    <p>Case 032234</p>

                    <strong>DESCRIPTION</strong>
                    <p>some new case </p>

                    <strong>VALUE</strong>
                    <p>CAD$ 100.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )

}