const contain = document.getElementById("userdetails")
const loader = document.getElementById("loader")
async function fetchuser(){
    try {
        loader.style.display = "block" ;    
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const datas = await response.json()
        console.log(datas);
        display(datas)
        
    } catch (error) {
        contain.innerHTML = "<p>Failed to load users. Please try again.</p>"
        console.log(error)
        
    }
    finally{
        loader.style.display = "none";
    }
}
fetchuser() ;

function display(datas){
    datas.forEach((data) => {
       const card = document.createElement("div")
       card.classList.add("card")
       card.innerHTML = `<h3> ${data.name} </h3>
            <p><strong>Email : </strong>${data.email} </p>
            <p><strong>phno : </strong>${data.phone} </p>
            <p><strong>city : </strong>${data.address.city} </p>
            <p><strong>company : </strong>${data.company.name} </p>`
        
        contain.appendChild(card)
        
    })
}

