import React from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	let tarea = "Primera tarea"
	let tareas = []
	tareas.push(tarea)
	tareas.push(tarea)
	tareas.push(tarea)
	tareas.map(tarea => {

		console.log(tarea);
	});
	return (
		<div>
			<h1>todos</h1>
			<div>
				<input
					type="text"
					className="form-control"
					placeholder="Agregar tarea" />
					onChange={e => setTarea(e.target.value)}
					onKeyPress={}
					value=[tarea]


				<ul>
				</ul>
			</div>
		</div>
	);
};

export default Home;
