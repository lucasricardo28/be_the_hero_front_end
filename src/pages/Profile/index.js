import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import apiService from '../../service/apiService';
import './style.css';

import imageLogo from '../../assets/logo.svg';

export default function Profile(){
	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');

	const history = useHistory();

	const [incidents, setIncidents] = useState([]);

	useEffect(() => {
		apiService.get('incidents',{
			headers: {
				Authorization: ongId
			}
		}).then(response  => {
			setIncidents(response.data)
		})
	}, [ongId]);

	async function removeIncicent(id){
		try{
			
			await apiService.delete(`incidents/${id}`, {
				headers:{
					Authorization: ongId
				}
			});

			setIncidents( incidents.filter(incident => incident.id !== id));
		}catch(error){
			alert('não foi possivel deletar o item');
		}
	}

	function handleLogout(){
		localStorage.clear();
		history.push('/');
	}

	return(
		<div className="profile-container">
			<header>
				<img src={imageLogo} alt="Be the Hero"/>
				<span> Bem vindo, {ongName}</span>
				<Link className="button_primary" to="/incidents/create">
					Cadastrar novo caso
				</Link>
				<button type="button" onClick={ handleLogout } >
					<FiPower size="18" color="#E02041" />
				</button>
			</header>
			<h1>Casos cadastrados</h1>

			<ul>
				{ incidents.map((incident) => {
					return(
						<li key={incident.id} >
							<strong>Caso:</strong>
							<p>{incident.title}</p>

							<strong>Descrição:</strong>
							<p>{incident.description}</p>

							<strong>Valor:</strong>
							<p>{Intl.NumberFormat('pt-BR', {style : 'currency', currency: 'BRL'}).format(incident.value) }</p>

							<button type="button" onClick={ () => removeIncicent(incident.id) }>
								<FiTrash2 size="20" color="#a8a8b3" />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}