var data = localStorage.getItem("data")
data= JSON.parse(data);



function datoseventosAPI(){
    
    var id = location.search.split('?id=')
    var seleccionid= id[1]
    var ladata = data.events.find((evento)=>{
        return evento._id == seleccionid
    })
    var templatehtml=
    `<div class="card" style="width: 18rem;">
    <img src="${ladata.image}">
    <div class="card-body">
      <h5 class="card-title">${ladata.name}</h5>
      <p class="card-text">${ladata.description}</p>
      <p>Date: ${ladata.date}</p>
      <p>Price: ${ladata.price}</p>
      <p>Category: ${ladata.category}</p>
      <p>Place: ${ladata.place}</p>
      <p>Capacity: ${ladata.capacity}</p>
      <p>Assistance: ${ladata.assistance}</p>
      
    </div>
  </div>`


document.querySelector("#seccion3").innerHTML=templatehtml

}
datoseventosAPI()
