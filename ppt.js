let jugador = 0
let pc = aleatorio(1, 3)
jugador = prompt('Elige: 1-Piedra, 2-Papel, 3-Tijera')

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
	let resultado = ''
	if (jugada == 1) {
		resultado = 'Piedra🥌'
	} else if (jugada == 2) {
		resultado = 'Papel🎫'
	} else if (jugada == 3) {
		resultado = 'Tijera✂'
	} else {
		resultado = 'Sin eleccion❌'
		location.reload()
	}
	return resultado
}

alert('Pc elige ' + eleccion(pc))
alert('Tu eliges ' + eleccion(jugador))

// combate
if (pc == jugador) {
	alert('Empate😐')
} else if (jugador == 1 && pc == 3) {
	alert('Ganaste🎉🎖🥳')
} else if (jugador == 2 && pc == 1) {
	alert('Ganaste🎉🎖🥳')
} else if (jugador == 3 && pc == 2) {
	alert('Ganaste🎉🎖🥳')
} else {
	alert('Perdiste😣☠️')
}
console.log('Hola mundo')
location.reload()
