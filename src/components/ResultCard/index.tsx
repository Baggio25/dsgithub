import React from 'react';
import { Profile } from '../../types/Profile';
import ResultContainer from '../ResultContainer';

import './styles.css';

type Props = {
    profile: Profile;
}

const ResultCard = ( { profile } : Props) => {
    return (
        <>
            <div className="image-result-container">
                <img
                    src={profile.avatar_url}
                    alt={profile.login}
                />
            </div>
            <div className="data-result-container">
                <p className="title-result-container">Informações</p>
                <ResultContainer title="Perfil" data={profile.login}/>
                <ResultContainer title="Seguidores" data={profile.followers}/>
                <ResultContainer title="Localidade" data={profile.location}/>
                <ResultContainer title="Nome" data={profile.name}/>
            </div>
        </>
    );
};

export default ResultCard;
