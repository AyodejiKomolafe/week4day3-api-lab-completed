

let btn = document.querySelector("button");



const btn2 =(evt) =>{
    axios.get("https://swapi.dev/api/planets/?search=Alderaan",)
    .then(response =>{
     response.data.results[0].residents.forEach(element => {
        axios.get(element)
        .then(response  => {
            let h2 = document.createElement("h2")
            h2.textContent = response.data.name
            let body = document.querySelector("body")
            body.appendChild(h2)
        })
        
     });
        
    })
    .catch(err => console.log(err))
}




btn.addEventListener("click",btn2)
