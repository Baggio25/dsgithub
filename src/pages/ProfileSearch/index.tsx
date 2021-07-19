import axios from 'axios';
import React, { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import { Profile } from '../../types/Profile';

import './styles.css';

type FormData = {
    login: string;
};

const ProfileSearch = () => {
    const [profile, setProfile] = useState<Profile>();

    const [formData, setFormData] = useState<FormData>({
        login: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formData.login) {
            axios
                .get(`https://api.github.com/users/${formData.login}`)
                .then((response) => {
                    setProfile(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    alert("Usuário não localizado!");
                    console.error(error);
                });
        } else {
            alert('Informe um usuário para pesquisa!');
        }
    };

    return (
        <div className="application-container">
            <div className="">
                <div className="container search-container">
                    <h2>Encontre um perfil Github</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <input
                                type="text"
                                name="login"
                                value={formData.login}
                                className="search-input"
                                placeholder="Usuário GitHub"
                                onChange={handleChange}
                                autoFocus
                            />

                            <button
                                type="submit"
                                className="btn btn-primary search-button"
                            >
                                Encontrar
                            </button>
                        </div>
                    </form>
                </div>
                {profile && (
                    <div className="container result-container">
                        <ResultCard profile={profile} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileSearch;
