let registros = []

while (true) {
    let nome = prompt("Nome da pessoa").toLowerCase()
    let sobrenome = prompt("Sobrenome da pessoa").toLowerCase()
    let idade
    while (true) {
      idade = Number(prompt("Idade da pessoa"))
      if (! Number.isNaN(idade)) {
        break
      }
      alert('Idade inválida, por favor digite um número')
    }
    let nacionalidade = prompt("Nacionalidade da pessoa").toLowerCase()
    let estadocivil = prompt("Estado Civil da pessoa").toLowerCase() 
    let color = prompt("Cor favorito pessoa").toLowerCase()

    let pessoa = {nome, sobrenome, idade, nacionalidade, estadocivil, color }
    
    registros.push(pessoa)

    let resp = confirm("Desea adicionar outra pessoa?")
        if (resp===false) {
            break
        }
 }

console.log (`DADOS PESSOA`)
console.table(registros)
console.log(registros)


/// comparações

let edad = mayoredad(registros)
console.log('As pessoas mais velhas encontradas nos registros foram:')
for (let pessoa of edad) {
  console.log(`${pessoa.nome}: ${pessoa.idade} anos`)
} 
let meedad = menoredad(registros)
console.log('As pessoas mais novas encontradas nos registros foram:')
for (let pessoa of meedad) {
  console.log(`${pessoa.nome}: ${pessoa.idade} anos`)
} 

let gruposnacionalidad = nacionalidad(registros)

for (let nacionalidade of Object.keys(gruposnacionalidad)) {
  console.log(`Pessoas que tem la nacionalidade ${nacionalidade}:`)
  for (let pessoa of gruposnacionalidad[nacionalidade]) {
    console.log(`- ${pessoa.nome}`)
  }
}

let gruposestadocivil = estadocivil(registros)

for (let estadocivil of Object.keys(gruposestadocivil)) {
  console.log(`Pessoas que tem mismo estado civil ${estadocivil}:`)
  for (let pessoa of gruposestadocivil[estadocivil]) {
    console.log(`- ${pessoa.nome}`)
  }
}

let gruposcolor = colorfavorito(registros)

for (let color of Object.keys(gruposcolor)) {
  console.log(`Pessoas que gusta e mismo color ${color}:`)
  for (let pessoa of gruposcolor[color]) {
    console.log(`- ${pessoa.nome}`)
  }
}

function mayoredad(registros) {
    let edad = [registros[0]]
    
    for (let registro of registros.slice(1)) {
      if (registro.idade > edad[0].idade) {
         edad = [registro]
      } else if (registro.idade === edad[0].idade) {  
         edad.push(registro) 
       } 
     }
    return edad
  }
  
function menoredad(registros) {
   let meedad = [registros[0]]
    
    for (let registro of registros.slice(1)) {
      if (registro.idade < meedad[0].idade) {
         meedad = [registro]
      }else if (registro.idade === meedad[0].idade) {  
        meedad.push(registro) 
      }   
   }
    return meedad
  }
  


  
function  nacionalidad(registros) {
  let gruposnacionalidad = {}
  
  for (let registro of registros) {
    if (typeof gruposnacionalidad[registro.nacionalidade] === 'undefined') {
      gruposnacionalidad[registro.nacionalidade] = [ registro ]
    } else {
      gruposnacionalidad[registro.nacionalidade].push(registro)
    }
  }

  return gruposnacionalidad
}

function  estadocivil(registros) {
  let gruposestadocivil = {}
  
  for (let registro of registros) {
    if (typeof gruposestadocivil[registro.estadocivil] === 'undefined') {
      gruposestadocivil[registro.estadocivil] = [ registro ]
    } else {
      gruposestadocivil[registro.estadocivil].push(registro)
    }
  }

  return gruposestadocivil
}

function  colorfavorito(registros) {
  let gruposcolor = {}
  
  for (let registro of registros) {
    if (typeof gruposcolor[registro.color] === 'undefined') {
      gruposcolor[registro.color] = [ registro ]
    } else {
      gruposcolor[registro.color].push(registro)
    }
  }

  return gruposcolor
}





