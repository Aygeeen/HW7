import React, {useState} from "react";
import "./registration.css"

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
    });

    const formChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value,});
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Введенные данные:", formData);
    };

    return (
        <div className="registration-form">
            <h2>Регистрация</h2>
            <form onSubmit={formSubmit}>
                <div className="form">
                    <label htmlFor="fullName">ФИО: </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={formChange}/>
                </div>
                <div className="form">
                    <label htmlFor="phoneNumber">Ваш номер телефона: </label>
                    <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={formChange}
                    />
                </div>
                <div className="form">
                    <label htmlFor="email">Адрес Электронной почты: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={formChange}
                    />
                </div>
                <button onClick={formSubmit}>Submit</button>
            </form>
        </div>
    );
}