const URL=https://www.devmedia.com.br/javascript-promise/41205
console.log(`FONTE: ${URL}`)

console.log()
console.log()

//Promise:
	
const message=(message)=>{
    		return new Promise((resolve, reject)=>{
        
        resolve(message)
        
        reject(new Error('Desculpe, Houve um erro!'))
    })
}


message('OK')
    .then(()=>{
        console.log('OK')
    })
    .catch(err=>console.log(err))


console.log('______________________________________________________________________________________________________________________________')
	
	
//código do devMedia
function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    resolve([ 1, 2, 3 ])
  })
}

function getUsuarioById (id) {
  return new Promise((resolve, reject) => {
    resolve({ id, nome: 'João da Silva' })
  })
}

getTodosOsUsuarios()
  .then(ids => getUsuarioById(ids[0]))
  .then(usuario => console.log(usuario)) // { id: 1, nome: 'João da Silva' }