import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './style.css';

export default function NewIncident(){
	return (
		<div className="incident-container">
			<div className="content">
				<section>
					<img src={logo} alt="Be The Hero" />
					<h1>Cadastrar novo caso</h1>
					<p> Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
					<Link className="link-page" to="/profile">
						<FiArrowLeft size="16" color="#E02041" />
						Voltar pra home.
					</Link>
				</section>
				<form>
					<input placeholder="Titulo do caso" />
					<textarea placeholder="Descrição" >
					</textarea>
					<input placeholder="Valor em reais" />
					<button className="button_primary" type="submit">Cadastrar</button>
				</form>
			</div> 	
		</div> 
	);
}