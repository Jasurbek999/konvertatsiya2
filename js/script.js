 'use strict';




// MAP  method yangi massiv qaytaradi eski massivni qiymatini o`zgartirib
 
// const  car =['MErs', 'BmW', 'RolCE RoyCe']

// const arr = car.map(item =>item.toLocaleLowerCase())
// console.log(arr)

// // Filter - method bu ham bizga yangi massiv qaytaradi filter qilib     

// let car = ['mersedes benz', 'audi', 'bmw', 'rollce roycesd']
// car = car.filter(item=>item.length < 5)
// console.log(car)

// SOME bilan EVERY - method   bular bizga boolen qiymat qaytaradi yani false hamda true 

// const arr= [1, 'Jasur', true]
// //console.log(arr.some(item=> item==='Jasur'))
// console.log(arr.every(item=> typeof item=== 'Jasur'))


// REDUCE  method bitta qandaydir qiymat qaytaradi

// const arr = [3,32,15,4]

// //             0      3
// //             3       32
// //             35      15
// //             50       4
// //             54       0

// const res = arr.reduce((sum, current)=> sum+ current,20)
// console.log(res)

// const arr= ['bmw', 'merc', 'rollce royce', 'audi']

// const res =arr.reduce((sum, current)=> `${sum}, ${current}`)
// console.log(res)


 
//  const request= (time)=>{
//   return new Promise((resolve)=>{
//     setTimeout(() => resolve(), time);
//   })
//   }
// //  request(1000).then(()=> console.log("Request 1000 ms"))
// //  request(2000).then(()=> console.log("Request 2000 ms"))
// //  request(3000).then(()=> console.log("Request 3000 ms"))
 
// // Promise.all([request(1000),request(2000),request(3000)]).then(()=>{
// //   console.log("All")
// // })

// Promise.race([request(1000),request(2000),request(3000)]).then(()=>{
//   console.log("All")
// })


// // API - Application Programming interface
// // DOM map API
// // Google map API
// // Google place API
















const uzs =document.querySelector('#uzs'),
      usd =document.querySelector('#usd')

      uzs.addEventListener('input', (e)=>{
        console.log(e)
        const request = new XMLHttpRequest()

        console.log(request)

        request.open('GET','json/current.json')
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8' )
        request.send()

        // status 200 ok / 404 not found/ 500 server eror/ 400 client error

        request.addEventListener('load', ()=> {
          if(request.status===200){
            console.log(request.response)
            const data =JSON.parse(request.response)
            usd.value= (+uzs.value / data.current.usd).toFixed(2)
          }else{
            usd.value='Something went wrong'
          }
        })
      })

// //  const isFriendCome=true;

// //  const meetingRequest= new Promise((resolve,reject) =>{
// //   if(isFriendCome){
// //     const msg=" Friend I'm there"
// //     resolve(msg)
// //   }else{
// //     const err=" I can't  come there"
// //     reject(err)
// //   }
// //  })

// //  meetingRequest
// // .then((msg)=>{console.log(msg) })
// // .catch((err)=>{console.log(err)})
// // .finally(()=>{console.log("I'm calling you")})

// console.log('Request data ...')

// setTimeout(() => {
//   console.log('Processing data...')

//   const product = {
//     name:'car',
//     color:'black',

//   }

//   setTimeout(() => {
//     product.status='order'
//     console.log(product)
//   }, 2000);
// // }, 2000);

// const req =new Promise((resolve, reject)=>{
//   console.log('Requesting data... ')
// setTimeout(() => {
  
//   const product ={
//     name: 'car',
//     color:'black'
//   }

//   console.log("Processing data...")
  
//   resolve(product)
// }, 2000);

// })

// req.then((data)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//     data.status='Ordered'

//     console.log('Get data...')

//     resolve(data)
//     }, 2000);
//   })
// })
// .then((result)=>console.log(result))
// .catch(()=>console.log('Something went wrong'))
// .finally(()=>console.log('Fetching end'))














// class Car {
//   constructor(name, color, speed){
//     this.name=name,
//     this.colorf=color,
//     this.speed=speed

//   }

//   calcSpeed(){
//     return this.speed*100
//   }

// }

// class Bmw extends Car{
//   constructor(name, color, isAirBag, extraBallon){
//     super(name, color)
//     this.isAirBag=isAirBag,
//     this.extraBallon=extraBallon
//   }
  
//   logger(){
//     console.log(`Name of car ${this.name},color is ${this.colorf} .Are there ${this.isAirBag} and ${this.extraBallon}`
//     )
//   }

// }
// const aboutCar = new Bmw('Bmw', 'black', true, 4)
// aboutCar.logger()




































// class Car {
//   constructor(name, color, speed) {
//     this.name=name,
//     this.color=color,
//     this.speed=speed
//   }

//   calcSpeed(){
//     return this.speed*100
//   }
// }

// class Spark extends Car{
//   constructor(name, color, speed,isAirBag, isBallon){
//     super(name, color, speed)
//     this.isAirBag=isAirBag,
//     this.isBallon=isBallon
//   }

//   logger(){
//     console.log(`Name of car is ${this.name},color is ${this.color}.Car is speed 
//     ${this.speed} Is airBag there
//      ${this.isAirBag} extra ballon is ${this.isBallon}`)
//   }
// }
// const aboutCar= new Spark('Spark','white',180,true,5)
 
// aboutCar.logger()

// console.log(aboutCar.calcSpeed())



































// 'use strict';

// const btn =document.querySelector('button')

// btn.addEventListener('click',(e)=> {
//   e.target.style.width='900px'
// })


// strelkali funksiya hech qanday context this ga ega emas 
// shuning uchun har doim u o`zidan yuqoridagiga osiladi yoki qaram bo`ladi
// const obj={
//   x:10,
//   y:15,
//   sum:function(){
//     const log=()=>{
//       console.log(this.x)
//     }
//     log()
//   }
  
// // }
// // obj.sum()

// const calc= (a)=>a+102

// console.log(calc(2))

















// function logger(speed){
//   console.log(`My car name is ${this.name} color is ${this.color} maximum ${speed}`)
// }



// const car={
//   name:'bmw',
//   color:'black'
// }

// logger.call(car,400)
// logger.apply(car,[400])


// function calc (number){
//   return this*number
// }

// const multiple=calc.bind(6)
// console.log(multiple(5))






































// Context this - har doim nimgadir qaram osiladi
//'use strict'

//***********----------------------------**************************************/
//  1) Bizda  this contexti oddiy function da windows global objectga qaram yoki osilgan
// bo`ladi. Agar bizda qatiy rejim 
//  ('use strict) yoqilga bo`lsa this contexti undefined ga teng bo`ladi

// function logger (a,b){
//   console.log(this)
//   function sum(){
//     console.log(this)
// return a+b
//   }
//   console.log(sum())
  
// }
// logger(2,3)


//***********----------------------------**************************************/

// 2)  Context(matn) this objectni ichidagi metodda objecting o`ziga teng

// const obj ={
//   x:10,
//   y:15,
//   sum:function(){
//     function logger(){
//       console.log(this)
//     }
//     logger()
//   }
// }
// obj.sum()

//***********----------------------------**************************************/

// 3) Context (matn) this konstrucktorda yangi objecktning ekzemplyariga yani misoli 
//   o`xshashiga teng

// function Car(name, color, ){
//   this.name=name,
//   this.color=color,
//   this.isAirBag=true

// }

// const bmw =new Car ('bmw', 'black')
// console.log(bmw)






//***********----------------------------**************************************/
// Clasure
//  // 
//  let a=4 
//  function log (){
//   let a =3
//   console.log(a)
//  }
//  log(a)
// yuqoridagi holat Closure deyiladi yani birinchi funksiyani ichidan qidiradi agar bor
// bo`lsa o`zidan oladi agar yo`q bo`lsa u holda tashqaridan  qidiradi va bo`lsa oladi























// const number= new Function
// console.log(number)

// function Car(name, color,mph){
//   this.name=name,
//   this.color=color,
//   this.mph=mph,
//   this.isAirBag=false,
//   this.speed= function (){
//     console.log(`Speed of car ${this.name} is ${this.mph}`)
//   }
// }

// Car.prototype.sayHello=function(){
//   console.log(`Car name of ${this.name}`)
// }

// const Gentra=new Car('Gentra','black',333)
// const Cobalt=new Car('Cobalt','white',322)

// Gentra.sayHello()
// Cobalt.sayHello()

// console.log(Gentra)
// console.log(Cobalt)

// Gentra.speed()
// Cobalt.speed()

// console.log(Gentra)
// console.log(Cobalt)


// const box =document.querySelector('.box'),
//       btn=document.querySelector('button')

// // const width=box.clientWidth
// // const height= box.clientHeight

// btn.addEventListener('click',()=>{
//   //box.style.height=box.scrollHeight+'px'
//   console.log(box.scrollTop)
// })

// const heightl=box.scrollHeight
// console.log(heightl)

// const width=box.offsetWidth
// const height= box.offsetHeight
// console.log(width)
// console.log(height)












// const now = new Date()

// console.log(now.setHours(10))
// console.log(now)
// let start =new Date()

// for(let i=0;i<100000; i++){
//  let some= i**3
// }

// let end =new Date()

// alert(`Loope completed in ${end-start} milliseconds`)

// console.log(start.getTime())
// console.log(end.getTime()) 



