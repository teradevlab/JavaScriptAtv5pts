const downurl = fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then(data => {
        let picture = document.createElement("img")
        picture.src = data.message
        document.body.appendChild(picture)
    })
    .catch(error => console.error("Uai, sua cachorro não veio" + error))