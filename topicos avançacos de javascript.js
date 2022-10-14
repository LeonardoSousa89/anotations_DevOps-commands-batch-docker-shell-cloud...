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

'React-HOOKS'

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([]);

  useEffect(()=>{
    console.log(pessoa)
  },[pessoa])

  return (
    <>
      <input
        placeholder="escreva..."
        value={this.pessoa}
        onChange={(e) => {setPessoa(e.target.value)}}
      />
    </>
  );
}


console.log('______________________________________________________________________________________________________________________________')

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([]);

  useEffect(()=>{
    
  },[pessoa])

  return (
    <>
      <input
        placeholder="escreva..."
        value={this.pessoa}
        onChange={(e) => {setPessoa(e.target.value)}}
      />

      <br />
      <hr />

      <span>{pessoa}</span>
    </>
  );
}


console.log('______________________________________________________________________________________________________________________________')
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([]);
  const [input,  setInput]  = useState('');

  useEffect(()=>{

  },[pessoa])

function addPessoa(){
  setPessoa([...pessoa, input])
  setInput('')
  console.log(pessoa)
}

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button onClick={addPessoa}>enviar</button>

      <br />
      <hr />

    </>
  );
}

console.log('______________________________________________________________________________________________________________________________')

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([]);
  const [input,  setInput]  = useState('');

  useEffect(()=>{

  },[pessoa])

function addPessoa(){
  setPessoa([...pessoa, input])
  setInput('')
}

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button onClick={addPessoa}>enviar</button>

      <br />
      <hr />
    
    <ul>{pessoa.map(e=>{return(
          <li key={e}>{e}</li>
    )})}</ul>
    </>
  );
}
console.log('______________________________________________________________________________________________________________________________')

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([
    'Bruce Wayne',
    'Bruce Banner',
    'Matthew Michael Murdock',
    'Peter Parker',
    'Dick Greyson',
    'Billy Maddox',
    'Berry Allen'
  ]);
  const [input,  setInput]  = useState('');

  useEffect(()=>{

  },[pessoa])

function addPessoa(){
    setPessoa([...pessoa, input])
    setInput('')
  }

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button onClick={addPessoa}>enviar</button>

      <br />
      <hr />
    
    <ul>{pessoa.map(e=>{return(
          // o elemento encontrado recebe valor da posição inicial da sua letra ou número 
          <li key={e}>
            {/* {e.toLowerCase().indexOf('bruce')} */}
            {/* {e.toLowerCase().indexOf('b')} */}
            {/* {e.toLowerCase().indexOf('br')} */}
            {/* {e.toLowerCase().indexOf('wayne')} */}
            {/* {e.toLowerCase().indexOf(' michael murdock')} */}
            {e.toLowerCase().indexOf('dick greyson')}
          </li>
    )})}</ul>
    </>
  );
}

console.log('______________________________________________________________________________________________________________________________')
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [pessoa, setPessoa] = useState([
    'Bruce Wayne',
    'Bruce Banner',
    'Matthew Michael Murdock',
    'Peter Parker',
    'Dick Greyson',
    'Billy Maddox',
    'Berry Allen'
  ]);
  const [input,  setInput]  = useState('');

  useEffect(()=>{

  },[pessoa])

function addPessoa(){
    setPessoa([...pessoa, input])
    setInput('')
  }

 function removerTudo(){
    for(let i=0;i<=pessoa.length;i++){
      let remove=pessoa.splice(0,pessoa[i])
      setPessoa(remove)
    }
 }

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button onClick={addPessoa}>enviar</button>
    <button onClick={removerTudo}>apagar</button>

      <br />
      <hr />
    
    <ul>{pessoa.map(e=>{return(
           <li key={e}>
            {e}
           </li>
    )})}</ul>
    </>
  );
}
console.log('______________________________________________________________________________________________________________________________')

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {

  const URL='https://api.adviceslip.com/advice'

  const [msg, setMsg]=useState([]) 

  useEffect(()=>{
       carregarMsg() 
  },[])

  async function carregarMsg(){
    await fetch(URL,{method:'GET'})
              .then(r=>r.json())
              .then(r=>{
                 setMsg(r)
				 console.log(msg)
              })
  }

 

  return (
    <>
     
    </>
  );
}

console.log('______________________________________________________________________________________________________________________________')

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const URL = "https://api.adviceslip.com/advice";

  const [msgId, setMsgId] = useState([]);

  useEffect(() => {
    carregarMsg();
  }, []);

  async function carregarMsg() {
    await fetch(URL, { method: "GET" })
      .then((r) => r.json())
      .then(r=>setMsgId(r))
  }

  return (
    <>
      <h2>{msgId.slip.id}</h2>
      <h2>{msgId.slip.advice}</h2>
    </>
  );
}
