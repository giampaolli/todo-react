'use strict'
'use strict'
import React from 'react'

const App = () => (
	<div>
		<input type="text" />

		<ul>
			<li style={{textDecoration: 'line-through'}}>teste 1</li>
			<li>teste 2</li>
			<li>teste 3</li>
			<li>teste 4</li>
			<li>teste 5</li>
		</ul>

		<div>
			<h3>Mostrar</h3>
			<span>Todos</span> | <a href="#">Finalizados</a> | <a href="#">A fazer</a>
		</div>
	</div>
)

export default App
