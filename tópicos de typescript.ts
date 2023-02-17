//https://www.typescriptlang.org/docs/
//https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_
//https://paiza.io/projects/ZCJ30jewpwFyTrciY6ZiCQ?language=typescript
//https://www.tutorialsteacher.com/typescript/typescript-generic-interface


let variable: number=0

function squareRoot(variable): number{
    return variable**2
}    

console.log(squareRoot(6))

/*_________________________________________________________________________________________________________________________________*/


class SquareRoot {
    
    private variable: number=0
    
    constructor(variable){
        this.variable=variable
    }
    
        
    showNumber(): number{
        return this.variable**2
    }    
}


const MathSquareRoot=new SquareRoot(5)
console.log(MathSquareRoot.showNumber())

/*_________________________________________________________________________________________________________________________________*/


let verdade: boolean=false

function verificaVerdade(verdade): void {
    
    if(verdade){
        
        console.log("é verdadeiro")
    
        
    }else{
        
        console.log("não é verdadeiro")
    
    }
    
}

verificaVerdade(false)

/*_________________________________________________________________________________________________________________________________*/

let mensagem: string=""

function mostraMensagem(mensagem): string {
    
    return mensagem
    
}

console.log(mostraMensagem("fala bicho, como tá?"))
console.log(mostraMensagem("tudo blê, man!!!"))

/*_________________________________________________________________________________________________________________________________*/

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());

/*_________________________________________________________________________________________________________________________________*/

interface Player {
  name: string;
  age: number;
  point: number;
  hour: Date;
}
 
function playing(player: Player) {
  return "Hello:" + player.name + ", points:" + player.point;
}

let player: Player

player={
  name: 'Mendes',
  age: 33,
  point: 25468,
  hour: new Date()
}

console.log(playing(player))

/*_________________________________________________________________________________________________________________________________*/

//tuple
let tupla: [number, boolean, string]
tupla=[0.01, false, "este array é definido somente com 3 elementos e 3 tipos [tupla é uma estrutura de dados previamente definida]"]

console.log(tupla)

/*_________________________________________________________________________________________________________________________________*/

//enum
enum color {
    white='#fff',
    black='#000'
}

console.log(color.white)

/*_________________________________________________________________________________________________________________________________*/

function error(): never {
	throw new Error('Erro lançado!')
}

error()

/*_________________________________________________________________________________________________________________________________*/

//Object

let buy: object

buy = { item: 'sal', preco: 0.68 }

console.log(buy)

/*_________________________________________________________________________________________________________________________________*/

//Arrays
let arrayString: Array<string>
arrayString=["letra", "palavra", "é uma string", "opa!!!"]

console.log(arrayString)



let arrayNumero: Array<number>
arrayNumero=[1,2,5,0,4,5,85,0.98]

console.log(arrayNumero)


let arrayBooleano: Array<boolean>
arrayBooleano=[true, true, false, true, false, false]

console.log(arrayBooleano)	

//O elemento Type do Type Aliases pode ser utilizado como opção no lugar da interface [porém há diferenças para seu uso]
interface Players{
    name: string;
    age: number;
    points: number;
    date?: Date;
}

let player1: Players={
    name: 'MendesDev',
    age: 33,
    points: 21458,
    date: new Date()
}

let player2: Players={
    name: 'lariDev',
    age: 27,
    points: 41529,
    date: new Date()
}

let player3: Players={
    name: 'wolveDev',
    age: 36,
    points: 36589
}

let arrayPalyers: Array<Players>
arrayPalyers=[player1, player2, player3]

console.log(arrayPalyers)

/*_________________________________________________________________________________________________________________________________*/

//Generic
interface Client {
    User: string,
    password: number| string,
    moment?: Date
}


let user1: Array<Client>=[ {User: 'Mandev', password:123456, moment: new Date()} ]
let user2: Array<Client>=[ {User: 'Noah', password: 'asd545#'} ]

console.log(user1, user2)

/*_________________________________________________________________________________________________________________________________*/

//Generic
interface Person<T> {
    User: T;
    Password: T
}

let user1: Person<string> = { User:"Bishop", Password:"02asd1_*%4adsa" }
let user2: Person<string> = { User:"Momnroe", Password:"1234" }

console.log(user1, user2)

/*_________________________________________________________________________________________________________________________________*/

class MMorpg {
    
    private username: string
    private age: number
    private points: number
    private level: number
    private world: number
    private moment: Date
    private admin: boolean
    
    constructor(username: string, age: number, points: number, level: number, world: number, moment: Date, admin: boolean){
        this.username=username
        this.age=age
        this.points=points
        this.level=level
        this.world=world
        this.moment=moment
        this.admin=admin
    }
    
    levelPlayerPoints() {
        
        let point=this.points**2
        let levelAdd=point + this.level
        
        this.points=levelAdd
       
        return this
        
    }
    
    showMMorpgPlayer() {
        
        if(this.age < 16) return "this player can't be registered in the plataform"
        
        return (
                "nick:" 
                + this.username 
                + "," 
                + "point:" 
                + this.points 
                + "," 
                + "player level:" 
                +  this.level 
                + "," 
                + "world:" 
                + this.world 
                + "," 
                + "moment:"  
                +  this.moment 
                + "," 
                + "server admin:" 
                + this.admin
            )
        
    }
    
}

const player1=new MMorpg('MendesDev', 33, 2320, 190, 7, new Date(), true)
const player2=new MMorpg('avaIri', 13, 3, 90, 3, new Date(), false)
const player3=new MMorpg('makoto gensai', 42, 4589, 404, 7, new Date(), false)

console.log(player1.levelPlayerPoints().showMMorpgPlayer())
console.log(player2.levelPlayerPoints().showMMorpgPlayer())
console.log(player3.levelPlayerPoints().showMMorpgPlayer())

/*_________________________________________________________________________________________________________________________________*/

type Data={
    id: number,
    name: string,
    city?: string,
    country: string
}

let TABLE: Array<Data>=[
    {id: 1, name: "Todd Mcfarlane", city: "Calgari", country: 'Canada'},
    {id: 2, name: "Alan More", city: "", country: 'United Kingdom'},
    {id: 3, name: "Jim lee", city: "New York", country: 'United States'},
    {id: 4, name: "Frank Miller", city: "Texas", country: 'United States'},
    {id: 5, name: "Katsuhiro otomo", city: "Myiagi", country: 'Japan'},
    {id: 6, name: "Joe Quesada", city: "", country: 'United States'},
    {id: 7, name: "David Gibbons", city: "", country: ''},
    {id: 8, name: "Stan Lee", city: "New York", country: 'United States'},
    {id: 9, name: "Steve Dikto", city: "New York", country: 'United States'},
]

console.table(TABLE)

/*_________________________________________________________________________________________________________________________________*/




/*_________________________________________________________________________________________________________________________________*/




/*_________________________________________________________________________________________________________________________________*/

//outros elementos destacados para pesquisa: Union, type alias


















