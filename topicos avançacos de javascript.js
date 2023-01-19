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

function deletar(eId){
    pessoa.splice(pessoa[eId],1)
    console.log(pessoa)
}

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button style={{cursor: 'pointer'}} onClick={addPessoa}>enviar</button>
    <button style={{cursor: 'pointer'}}onClick={removerTudo}>apagar</button>

      <br />
      <hr />
    
    <ul>{pessoa.map((e, eId)=>{return(
           <li key={eId}>
            {e} {<button style={{cursor: 'pointer'}} onClick={()=>{deletar(eId)}}>deletar</button>}
           </li>
    )})}</ul>
    </>
  );
}
}
console.log('______________________________________________________________________________________________________________________________')
{/*mudar este*/}

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

function deletar(eId){
	console.log(eId);
    pessoa.splice(pessoa[eId],1)
    addPessoa()
}

  return (
    <>
      <input
        placeholder="escreva..."
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />

    <button   style={{cursor: 'pointer'}}  onClick={addPessoa}>enviar</button>
    <button   style={{cursor: 'pointer'}} onClick={removerTudo}>apagar</button>

      <br />
      <hr />
    
    <ul>{pessoa.map((e, eId)=>{return(
           <li style={{listStyle:'none'}} key={eId}>
            {  e ? 
                <div>
                  {eId} -
                  {e}  
                  {<button 
                      style={{cursor: 'pointer'}} 
                      onClick={()=>{deletar(eId)}}>
                        deletar
                    </button>
                  } 
                </div> 
                : 
                <div></div>
                }
           </li>
    )})}</ul>
    </>
  );
}

{/*mudar este*/}

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

console.log('______________________________________________________________________________________________________________________________')

data=[]


function Interface(object){
    
    data.push(object)
    
    return data
    
} 

let user=(args)=>{
    
    let userData={ ...args }
    
    return Interface(userData)
    
}

let store=(args)=>{
    
    let storeData={ ...args }
    
    return Interface(sstoreData)
    
}

let product=(args)=>{
    
    let prodData={ ...args }
    
    return Interface(prodData)
    
}


//pode ser uma classe ou objeto representando o componente model ou uma função recebendo o arg: req.body.arg nos campos [express.js]
let client1={
    id: 1, nome: 'Mendes', email: 'mendes@Gmail.com', endereco: 'Salvador, BA'
}

//pode ser uma classe ou objeto representando o componente model ou uma função recebendo o arg: req.body.arg nos campos [express.js]
let store1={
    id: 33, nome: 'mix supermercado', endereco: 'AV. Aliomar Baleeiro', tipo:'comercio de alimentos'
}

//pode ser uma classe ou objeto representando o componente model ou uma função recebendo o arg: req.body.arg nos campos [express.js]
let buy1={
    id: 145, item:'maratá 200ml', preco:2.35, peso: '10g', emEstoque:'1028 cxs', codigo:012210021, userId: client1, storeId: store1
}


console.log(product(buy1))

console.log('______________________________________________________________________________________________________________________________')

data=[]


function Interface(object){
    
    data.push(object)
    
    return data
} 


let user=({ ...args })=>{
    
    return Interface(args)
}

let store=({ ...args })=>{
    
    return Interface(args)
}

let product=({ ...args })=>{
    
    return Interface(args)
}


user({ client1: {id: 1, nome: 'Mendes', email: 'mendes@Gmail.com', endereco: 'Salvador, BA'} })

store({store1: 	{id: 33, nome: 'mix supermercado', endereco: 'AV. Aliomar Baleeiro', tipo:'comercio de alimentos'}})

product({buy1: 	{id: 145, 
                 item:'maratá 200ml', 
                 preco:2.35, 
                 peso: '10g', 
                 emEstoque:'1028 cxs', 
                 codigo:012210021, 
                 userId: JSON.stringify(data[0].client1), 
                 storeId: JSON.stringify(data[1].store1)
}})


console.log(data[2].buy1)

console.log('______________________________________________________________________________________________________________________________')


class Argument {
    
    constructor({...args}){
        this.args=args
    }
}

class User extends Argument{
    
    constructor({...args}){
        super(args)
    }
}

class Store extends Argument{
    
    constructor({...args}){
        super(args)
    }
}

class Product extends Argument{
    
    constructor({...args}){
        super(args)
    }
}


let user1=new User({client1: {id: 1, nome: 'Mendes', email: 'mendes@Gmail.com', endereco: 'Salvador, BA'}})
let user2=new User({client2: {id: 2, nome: 'Sousa', email: 'sousa@Gmail.com', endereco: 'Salvador, BA'}})

let store1=new Store({store1: {id: 33, nome: 'mix supermercado', endereco: 'AV. Aliomar Baleeiro', tipo:'comercio de alimentos'}})

let product1=new Product({
	
    buy1:{  id: 145, 
			item:'maratá 200ml', 
			preco:2.35, 
			peso: '10g', 
			emEstoque:'1028 cxs', 
			codigo:012210021,
			userId: JSON.stringify(user1.args),
			storeId: JSON.stringify(store1.args)             

}})
        
console.log(product1)

console.log('______________________________________________________________________________________________________________________________')


class Argument {
    
    constructor({...args}){
        this.args=args
    }
}

class User extends Argument{
    
    constructor({...args}){
        super(args)
    }
}

class Store extends Argument{
    
    constructor({...args}){
        super(args)
    }
}

class Product extends Argument{
    
    constructor({...args}){
        super(args)
    }
}


let register=[]


let store1=new Store({store1: {id: 33, nome: 'mix supermercado', endereco: 'AV. Aliomar Baleeiro', tipo:'comercio de alimentos'}})

let product1=new Product({
	
    buy1:{  id: 145, 
			item:'maratá 200ml', 
			preco:2.35, 
			peso: '10g', 
			emEstoque:'1028 cxs', 
			codigo:012210021           

}})

let product2=new Product({
	
    buy2:{  id: 155, 
			item:'Nescau 200ml', 
			preco:4.85, 
			peso: '10g', 
			emEstoque:'322 cxs', 
			codigo:012254880           

}})

let product3=new Product({
	
    buy3:{  id: 47, 
			item:'sangria olho de boi', 
			preco:17.56, 
			peso: '1.3l', 
			emEstoque:'12 cxs', 
			codigo:012259999           

}})

let user45=new User({
    
    client1: {id: 1, 
             nome: 'Mendes',
             email: 'mendes@Gmail.com', 
             endereco: 'Salvador, BA',
             buyId: product1.args,
			 storeId: store1.args
        
}})

register.push({user45})
        
user45=new User( {
    client1: {
        
             id: 1, 
             nome: 'Mendes',
             email: 'mendes@Gmail.com', 
             endereco: 'Salvador, BA',
             buyId: product2.args,
			 storeId: store1.args   
    
        
    }
})

register.push({user45})

user45=new User( {
    client1: {
        
             id: 1, 
             nome: 'Mendes',
             email: 'mendes@Gmail.com', 
             endereco: 'Salvador, BA',
             buyId: product3.args,
			 storeId: store1.args   
    
        
    }
})

register.push({user45})

console.log(JSON.stringify(register))