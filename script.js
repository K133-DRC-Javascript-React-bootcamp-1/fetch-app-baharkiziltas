//getElementById ile butona ulaşıp event ekliyoruz
document.getElementById("button").addEventListener("click", getUserData());
//getElementById ile listeleme elemanina ulasiyoruz
let myList = document.getElementById("resultList");

async function getUserData() {
    await fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then((data) => {
            let result = data.results;

            let output = "<div>";

            result.forEach((element) => {
                output += 
           `
           <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.picture.large}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
        <p class="card-text">${element.dob.age}</p>
        <p class="card-text"><small class="text-muted">${element.email}</small></p>
      </div>
    </div>
  </div>
</div>
           `

            });

            document.querySelector("#resultList").innerHTML = output;

        })

}



