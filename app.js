 let joke = document.querySelector(".joke");
 let btn = document.querySelector(".btn");
 let api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit";

 btn.addEventListener("click", getJokes);

 async function getJokes () {
    let response = await fetch(api);
    let data = await response.json();

    if(data.type === "single"){
    joke.innerHTML = data.joke;
 }else{
    joke.innerHTML = data.setup + " " + data.delivery;
 }

 }
 