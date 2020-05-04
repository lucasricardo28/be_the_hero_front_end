import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import logo from '../../assets/logo.svg';
import apiService from '../../service/apiService';

export default function Register(){
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	async function onSubmitRegister(e){
		e.preventDefault();
		if(!name){
			alert("Informe o nome.")
			return false;
		}

		if(!email){
			alert("Informe o email.")
			return false;
		}

		const data = {name, email, phone, city, uf};

		try{
			let response = await apiService.post('ongs',data);
			alert('Seu ID de acesso é: '+response.data.id);
		}catch(error){
			alert('Erro ao tentar cadastrar');
		}

	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logo} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de ONGS.</p>
					<Link className="link-page" to="/">
						<FiArrowLeft size="16" color="#E02041" />
						Não tenho cadastro.
					</Link>
				</section>
				<form onSubmit={onSubmitRegister}>
					<input 
						placeholder="Nome da Ong" 
						value = { name }
						onChange={ e => setName(e.target.value)}
					/>
					<input 
						type="email"
						placeholder="E-mail"
						value = { email }
						onChange={ e => setEmail(e.target.value)}
					/>
					<input 
						placeholder="Telefone"
						value = {phone}
						onChange={ e => setPhone(e.target.value)}
					/>
					<div className="input-group">
						<input 
							placeholder="Cidade"
							value = {city}
							onChange={ e => setCity(e.target.value)}
						/>
						<input 
							placeholder="UF" 
							style={{ width: 80}}
							value = {uf}
							onChange={ e => setUf(e.target.value)}
						/>
					</div>
					<button className="button_primary" type="submit">Cadastrar</button>
				</form>
			</div> 	
		</div> 
	);
}