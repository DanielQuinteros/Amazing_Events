/*function cardspastevents(){
    templatehtml=""
    for(var i=0; i<data.eventos.length;i++){
        if (data.fechaActual>data.eventos[i].date)
        templatehtml+=`<div class="card" style="width: 18rem;">
        <img src="${data.eventos[i].image}">
        <div class="card-body">
          <h5 class="card-title">${data.eventos[i].name}</h5>
          <p class="card-text">${data.eventos[i].description}</p>
          <p>${data.eventos[i].price}</p>
          <a href="details.html" class="btn btn-primary">Go to details</a>
        </div>
      </div>`
    }
    document.querySelector("#seccion3").innerHTML=templatehtml
}
cardspastevents()*/



 /*var templatehtml=""
 data.eventos.forEach(element => { 
   if (data.fechaActual>element.date)
  templatehtml+=`<div class="card" style="width: 18rem;">
  <img src="${element.image}">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.description}</p>
    <p>${element.price}</p>
    <a href="details.html" class="btn btn-primary">Go to details</a>
  </div>
</div>`
   
 });  
 document.querySelector("#seccion3").innerHTML=templatehtml*/


 
 var checkboxclikeado=[]
 var buscador=''
 var data = localStorage.getItem("data")
data= JSON.parse(data);

 function checkboxDinamicos(){
   var checkboxes = document.getElementById('checkboxes')
   var nombreEventos= data.events.map(evento=> evento.category)
   const arraycategory = new Set(nombreEventos) 
   var datoSet = [...arraycategory]
 
   var cajascheckbox =""
   datoSet.forEach(category=>{
     cajascheckbox+=` <label class="check" ><input type="checkbox" value ="${category}">${category}</label>`
   })
   checkboxes.innerHTML = cajascheckbox
 var id=1
 data.events.map(evento=>evento.id=id++)


 }
 
 checkboxDinamicos()
 
 var clickcheck = document.querySelectorAll("input[type=checkbox]")
 
 clickcheck.forEach(check => check.addEventListener("click",function(event){
   var checked = event.target.checked
   if (checked){ 
     checkboxclikeado.push(event.target.value)
     fparafiltrado()
   }else {checkboxclikeado = checkboxclikeado.filter(uncheck=>uncheck !== event.target.value)
   fparafiltrado()
 } 
 }))
 
 
 
 var inputbuscador= document.getElementById("inputsearch")
 
 inputbuscador.addEventListener("keyup",(evento)=> {
   buscador= evento.target.value
   fparafiltrado()
 })
 
 function fparafiltrado() {
   let dato =[]
  if (checkboxclikeado.length > 0 && buscador !== undefined){
    checkboxclikeado.map(category=>{
      dato.push(...data.events.filter(nombre=>nombre.name.toLowerCase().includes(buscador.trim().toLowerCase())
      && nombre.category==category ))
    })
  } else if(checkboxclikeado.length > 0 && buscador == undefined){
    checkboxclikeado.map(category=>{
      dato.push(...data.events.filter(categoria=>categoria.category==category))
    })
  } else if(checkboxclikeado.length == 0 && buscador !== undefined){
    dato.push(...data.events.filter(nombre=>nombre.name.toLowerCase().includes(buscador.trim().toLowerCase())))
  } else{ dato.push(...data.events)}
  console.log(dato)
  
 
  cardspastevents(dato)
 }
 fparafiltrado()
function cardspastevents(dato){
  templatehtml=""
  for(var i=0; i<dato.length;i++){
      if (data.currentDate>dato[i].date)
      templatehtml+=`<div class="card" style="width: 18rem;">
      <img src="${dato[i].image}">
      <div class="card-body">
        <h5 class="card-title">${dato[i].name}</h5>
        <p class="card-text">${dato[i].description}</p>
        <p> Date: ${dato[i].date}</p>
        <p>Price: ${dato[i].price}</p>
        <a href="details.html?id=${dato[i]._id}" class="btn btn-primary">Go to details</a>
      </div>
    </div>`
  }
  document.querySelector("#seccion3").innerHTML=templatehtml
}
