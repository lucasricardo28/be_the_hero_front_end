import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from "react-router-dom";
import './style.css';

import imageLogo from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login(){
	return(
		<div className="login-container">
			<section className="form">
				<img src={imageLogo} alt="Logo"/>
				<form>
					<h1>Faça Login</h1>
					<input name="" placeholder="Digite seu Id" />
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