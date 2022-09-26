let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0

while (triunfos < 3 && perdidas < 3) {
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  jugador = prompt('Elige: 1-Piedra, 2-Papel, 3-Tijera')
  pc = aleatorio(1, 3)

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
    }
    return resultado
  }


  alert('Tu eliges ' + eleccion(jugador))
  alert('Pc elige ' + eleccion(pc))

  // combate
  if (pc == jugador) {
    alert('Empate😐')
    empates++
  } else if (jugador == 1 && pc == 3) {
    alert('Ganaste🎉🎖🥳')
    triunfos++
  } else if (jugador == 2 && pc == 1) {
    alert('Ganaste🎉🎖🥳')
    triunfos++
  } else if (jugador == 3 && pc == 2) {
    alert('Ganaste🎉🎖🥳')
    triunfos++
  } else {
    alert('Perdiste😣☠️')
    perdidas++
  }
  console.log({ perdidas, triunfos, empates })
}

alert(`Triunfos: ${triunfos} veces
Perdidas: ${perdidas} veces 
Empates: ${empates} veces`)


// location.reload()
