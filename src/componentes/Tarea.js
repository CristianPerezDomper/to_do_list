import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faCheckSquare,
	faEdit,
	faSquare,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada}) => {
	const [editandoTarea, cambiarEditandoTarea] = useState(false);
	const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

	const handleSumbit = (e) => {
		e.preventDefaul();
		cambiarEditandoTarea(false);
	};
	return (
		<li className="lista-tareas__tarea">
			<FontAwesomeIcon
				icon={tarea.completada ? faCheckSquare : faSquare}
				className="lista-tareas__icono lista-tareas__icono-check"
				onClick={() => toggleCompletada(tarea.id)}
			/>
			<div className="lista-tareas__texto">
				{editandoTarea ? (
					<form
						action=""
						className="formulario-editar-tarea"
						onSubmit={handleSumbit}
					>
						<input
							type="text"
							className="formulario-editar-tarea__input"
							value={nuevaTarea}
							onChange={(e) =>
								cambiarNuevaTarea(e.target.value)
							}
						/>
						<button
							type="submit"
							className="formulario-editar-tarea__btn"
						>
							Actualizar
						</button>
					</form>
				) : (
					tarea.texto
				)}
			</div>
			<div className="lista-tareas__contenedor-botones">
				<FontAwesomeIcon
					icon={faEdit}
					className="lista-tareas__icono lista-tareas__icono-accion"
					onClick={() =>
						cambiarEditandoTarea(!editandoTarea)
					}
				/>
				<FontAwesomeIcon
					icon={faTimes}
					className="lista-tareas__icono lista-tareas__icono-accion"
				/>
			</div>
		</li>
	);
};

export default Tarea;