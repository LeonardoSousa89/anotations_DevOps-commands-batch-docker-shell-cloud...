//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

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


new Promise((resolveOuter) => {
  resolveOuter(console.log('Hi, I am Promise method'));
});

console.log('______________________________________________________________________________________________________________________________')
 
 const minhaPromise = new Promise((resolve, reject) => {

    resolve(4);

});


minhaPromise
  .then(response=>response*2)
    .then(response=>response+2)
      .then(response=>console.log(response))

console.log('______________________________________________________________________________________________________________________________')
 
function PipeLinePromise(args){
        const minhaPromise=new Promise((resolve, reject) => {
    
        resolve(args);
    
    });
    
    minhaPromise
      .then(resp=>resp*2)
        .then(resp=>resp+1)
            .then(resp=>{
                
                if(resp>=10){
                    console.log(resp)
                }else{
                    console.log('less than 10')
                }
                
            })
  
}

PipeLinePromise(2)

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

import "./styles.css";

const NovoElemento=(props)=><p>{props.algo}</p>

export default function App(props) {

  const boolean=null
  const Element=boolean? <>Estado de verdade</> : <>Estado de mentira</>
  const novoElemento=boolean ? <NovoElemento algo='verdade'/> : <NovoElemento algo='mentira, não'/>

  return (
    <div className="App">
        <h1>{Element}</h1>

        <div className="container" 
            style={{ display: 'flex', 
                     flexDirection: 'row',
                     backgroundColor: 'rgba(0,0,0,0.4)',
                     padding: '1vh',
                     boxShadow: '0 0 32px red'
                     }}>

              <NovoElemento algo='diga a'/>
              <h3>{novoElemento}</h3>
        </div>

    </div>
  );
}

console.log('______________________________________________________________________________________________________________________________')

import "./styles.css";

const NovoElemento=(props)=><p>{props.algo}</p>

//posso usar for, switch case, if else ...
const MaisUmElemento=(props)=>{
	
  if(props.elemento === '0') return (<p>ponto 0</p>) //representa o estado de mentira (binário 0)
  if(props.elemento === '1') return (<p>ponto 1</p>) //representa o estado de verdade (binário 1)
}

export default function App(props) {

  const boolean=null
  const Element=boolean? <>Estado de verdade</> : <>Estado de mentira</>
  const novoElemento=boolean ? <NovoElemento algo='verdade'/> : <NovoElemento algo='mentira, não'/>

  return (
    <div className="App">
        <h1>{Element}</h1>

        <h2>
          <MaisUmElemento elemento='1' />
        </h2>

        <div className="container" 
            style={{ display: 'flex', 
                     flexDirection: 'row',
                     backgroundColor: 'rgba(0,0,0,0.4)',
                     padding: '1vh',
                     boxShadow: '0 0 32px red'
                     }}>
              <NovoElemento algo='diga a'/>
              <h3>{novoElemento}</h3>
        </div>

    </div>
  );
}

console.log('______________________________________________________________________________________________________________________________')

//comunicação entre components pai e filhos usando callback em props

import { Component } from "react";

import '../../App.css'
import './header.css'

import Carrinho from "../carrinho_de_compra/carrinho";

import sacola from '../../assets/bolsa-de-compras.png'


export default class Header extends Component{

    state={
        notificacao: '',
        contador: 0
    }

    bemVindo(){
        console.log('seja bem vindo')
    }

    addClique(){
        let incremento=this.state.contador+=1
        console.log(incremento)

       this.verificaContador()
    }

    verificaContador(){
        this.state.notificacao='item adicionado'
        
        const { notificacao }=this.state

        if(this.state.contador > 0) alert(notificacao) 
    }

    render(){
        return(
            <header className="app-header">
                            
              <div>

                <span className="app-header-title">
                    <h2>Redux Carrinho</h2>
                </span>

                <span className="app-header-carrinho">
                    
                    <Carrinho src={sacola} 
                              alt='sacola de compras' 
                              addClique={this.addClique.bind(this)} 
                    />

                </span>
              
              </div>
            </header>
        )
    }
}

console.log('______________________________________________________________________________________________________________________________')

.app-header{
    border: solid 1px red;
    background-color: whitesmoke;
    grid-area: component-header; 
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.app-header div{

  padding: 5px;

  width: 80%;
  display: flex;
  justify-content: space-between;
}

.app-header div>span{
  width: 50%;
}

.app-header-title{
  text-align: center;
}

.app-header-carrinho{
  display: flex;
  justify-content: end;
}

console.log('______________________________________________________________________________________________________________________________')

import { Component } from "react";

import './carrinho.css'

export default class Carrinho extends Component{

    render(){
        return(
            <main className="app-carrinho">

                <img   src={this.props.src}
                       alt={this.props.alt}
                       onClick={this.props.addClique.bind(this)}
                     />
            </main>
        )
    }
}

console.log('______________________________________________________________________________________________________________________________')

.app-carrinho img{
    height: 40px;
    width: 40px;
    cursor: pointer;
}


//comunicação entre components pai e filhos usando callback em props

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

console.log('______________________________________________________________________________________________________________________________') 
 
 // https://diessi.ca/blog/encadeamento-de-metodos-em-javascript/
 
 class Encadeamento {
    
    constructor(valor){
         this.valor=valor
    }
     
    duplicacaoDeValor(){
         this.valor*=2
         return this
    }
     
    somaDeValor(){
        this.valor+=2
        return this
    } 
    
    mostrarValor(){
        console.log(this.valor)
        return this
    }
     
 }

const pipeLine=new Encadeamento(1)

pipeLine.duplicacaoDeValor().somaDeValor().mostrarValor()

console.log('______________________________________________________________________________________________________________________________') 

const media_aprovacao=8.0
const media_recuperacao=6.0

const media=[
    { nome: 'joão', nota_av1: 7.3, bolsista: true },
    { nome: 'joão', nota_av1: 9.2, bolsista: true },
    { nome: 'joão', nota_av1: 9.8, bolsista: true },
    { nome: 'joão', nota_av1: 8.7, bolsista: true },
]

const resultado=media.map(nota=>nota.nota_av1).reduce((acumulador, atual)=>{
    
    const acumador_notas=(acumulador + atual)
    
    return acumador_notas
}) 


function resultado_final(){
    
    const calculo_media=resultado/media.length
    
    if(calculo_media >= media_aprovacao){
        
        return 'Aprovado: ' + calculo_media
        
    }else if(calculo_media >= media_recuperacao && calculo_media < media_aprovacao){
        
         return 'Recuperação: ' + calculo_media  
         
    }else{
        
        return 'Aluno entre em contato com o setor de bolsistas com urgência! Reprovado: ' + calculo_media  
    }
}

console.log(resultado_final())

 
 
 
 
 
 
 
 
 
 
 

