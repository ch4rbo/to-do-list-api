import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const handleKeyPress = event => {
		if (event.key == "Enter") {
			setListaTareas([...listaTareas, tarea]);
			setTarea("");
		}
	};
	const borrar = indice => {
		let result = listaTareas.filter((tarea, index) => index !== indice);
		setListaTareas(result);
	};

	return (
		<div className="text-center mt-5">
			<h1>To do list</h1>
			<div>
				<input
					type="text"
					className="form-control"
					placeholder="Agregar tarea"
					onChange={e => setTarea(e.target.value)}
					onKeyPress={f => handleKeyPress(f)}
					value={tarea}
				/>
				<ul>
					{listaTareas.map((item, index) => {
						return (
							<li key={index}>
								{item}{" "}
								<span onClick={() => borrar(index)}>
									&#10006;
								</span>{" "}
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				{" "}
				<p>contador de tareas {listaTareas.length}</p>{" "}
			</div>
		</div>
	);
};
export default Home;
