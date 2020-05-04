import React, { useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import './style.css';
import apiService from '../../service/apiService';

import imageLogo from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login(){

	const [id, setOngId] = useState('');
	const history = useHistory();

	async function submitAuthLogin(e){
		e.preventDefault();

		if(!id){
			alert("Informe a ong ");
			return false;
		}

		try{
			let response = await apiService.post('login',{id});

			localStorage.setItem('ongId',id);
			localStorage.setItem('ongName',response.data.name);

			history.push('/profile');
		}
		catch(error){
			alert("Erro, não foi possivel encontrar usuário.")
		}
	}

	return(
		<div className="login-container">
			<section className="form">
				<img src={imageLogo} alt="Logo"/>
				<form onSubmit={ submitAuthLogin }>
					<h1>Faça Login</h1>
					<input 
						placeholder="Digite seu Id"
						value={id}
						onChange={ e => setOngId(e.target.value)}
					/>
					<button className="button_primary" type="submit">Entrar</button>
				</form>
				<Link className="link-page" to="/register">
					<FiLogIn size="16" color="#E02041" />
					Não tenho cadastro.
				</Link>
			</section>
			<img src={heroesImage} alt="Heroes"/>
		</div>
	);
}