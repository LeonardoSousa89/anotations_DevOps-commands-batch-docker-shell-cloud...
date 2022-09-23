const URL='https://www.devmedia.com.br/javascript-promise/41205'
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


console.log('______________________________________________________________________________________________________________________________')
const URL2='https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22'
console.log(`FONTE: ${URL2}`)


//callback código 1

function work_control(message,callback){
    return message + ':' + callback
}

function calc(days, salary){
    return days * salary
}

console.log(work_control('dados do trabalhador [valor a receber em R$]', calc(3,100)))


console.log('______________________________________________________________________________________________________________________________')

//callback código 2
function work_control(salay,days, callback){
        
        let total = days * salay
        
        return callback(total)
        
}

work_control(100, 3,(result)=>{
    let resultSalary = result
    console.log(`dados do trabalhador [valor a receber em R$]: ${resultSalary}`)
})


console.log('______________________________________________________________________________________________________________________________')


//código do Medium

let salarioBruto = 3000;
let salarioLiquido;


function getSalario(salarioBruto, callback){
    
    let liquido = 0;
    
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}


getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`);
});

console.log('______________________________________________________________________________________________________________________________')