var teste3 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log("   <img src=" + data.message + " alt='Random Photo of a Dog' />")
    })
    .catch(error => console.error(error))