const gameDatas =  "./games.json";


 async function getAPI(URL) {
     const response = await fetch(URL);
     console.log(response);
     if (response) {
         hideloader();
     }
     display(response);
 }

 getAPI(gameDatas)
 .then(response => response.json())
 .then(titles => showtitles(titles.title));

 showTitles = titles => {
     const titlesDiv = document.querySelector('#')
 }

 function hideloader() {
     //document.getElementById('load-gauge').style.display = 'none';
 }

 let summonButton = document.getElementById("summon-button");

 summonButton.addEventListener("click", () => {
        location.href = "http://localhost:9999/api/final_fantasy"
 });

 function display(data) {
    let gameDataDisplay = [
        document.getElementById
    ]
        
 }










// module.exports = {
//     games
// };


