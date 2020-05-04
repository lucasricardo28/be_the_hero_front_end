import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import apiService from '../../service/apiService';

import logo from '../../assets/logo.svg';
import './style.css';


export default function NewIncident(){
	
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ value , setValue ] = useState('');
	const history = useHistory();

	async function submitNewIncident(e){
		e.preventDefault();

		if(!title){
			alert("Informe um titulo");
			return false;
		}

		if(!description){
			alert("Informe uma descricao");
			return false;
		}

		if(!value){
			alert("Informe um valor");
			return false;
		}

		let data = { title, description, value}

		try{
			await apiService.post('incidents',data);
			alert('um novo item foi adicionado');
			history.push('/profile');

		}catch(error){
			alert('error ao adicionar incident');
		}
	}

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
				<form onSubmit={submitNewIncident} >
					<input 
						placeholder="Titulo do caso"
						value ={ title }
						onChange ={ e => setTitle(e.target.value) }/>
					<textarea 
						placeholder="Descrição" 
						value={description}
						onChange={ e => setDescription(e.target.value)}>
					</textarea>
					<input 
						placeholder="Valor em reais"
						value={value}
						onChange={e => setValue(e.target.value)} />
					<button className="button_primary" type="submit">Cadastrar</button>
				</form>
			</div> 	
		</div> 
	);
}