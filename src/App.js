import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
	// Obtenemos las tareas guardadas de localstorage
	const tareasGuardadas = localStorage.getItem('tareas')
		? JSON.parse(localStorage.getItem('tareas'))
		: [];

	//Estableciendo el estado de local storage
	const [tareas, cambiarTareas] = useState(tareasGuardadas);

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}, [tareas]);

	//Accedemos a localstorage y comprobamos si mostrar completada es null
	let configMostrarCompletadas = '';
	if (localStorage.getItem('mostrarCompletadas') === null) {
		configMostrarCompletadas = true;
	} else {
		configMostrarCompletadas =
			localStorage.getItem('mostrarCompletadas') === 'true';
	}

	//Mostrar tarea completada de local storage
	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
		configMostrarCompletadas
	);

	useEffect(() => {
		localStorage.setItem(
			'mostrarCompletadas',
			mostrarCompletadas.toString()
		);
	}, [mostrarCompletadas]);

	return (
		<div className="contenedor">
			<Header
				mostrarCompletadas={mostrarCompletadas}
				cambiarMostrarCompletadas={cambiarMostrarCompletadas}
			/>
			<FormularioTareas
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>
			<ListaTareas
				tareas={tareas}
				cambiarTareas={cambiarTareas}
				mostrarCompletadas={mostrarCompletadas}
			/>
		</div>
	);
};

export default App;
