const downurl = fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then(data => {
        console.log( < img src = "{data.message}"
            alt = "Random Photo of a Dog" / > )
    })

.catch(error => console.error("Uai seu trem não foi" + error))