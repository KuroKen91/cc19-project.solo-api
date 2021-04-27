
function fetchData (){
    fetch("http://localhost:9999/api/final_fantasy").then(response => {
        return response.json();
    })
        .then(data => {
            document.querySelector('#app').innerHTML = data[0].title + "\n" + " Platform: " + data[0].platform + " Release Date: " + data[0].releasedate;
        console.log(data);
    });
}

fetchData();

//  async function getAPI(URL) {
//      const response = await fetch(URL);
     
//      if (response) {
//          hideloader();
//      }
//      display(response);
//  }

// getAPI(apiURL)
 

//  showTitles = titles => {
//      const titlesDiv = document.querySelector('#')
//  }

//  function hideloader() {
//      //document.getElementById('load-gauge').style.display = 'none';
//  }

//  let summonButton = document.getElementById("summon-button");

//  summonButton.addEventListener("click", () => {
//         location.href = "http://localhost:9999/api/final_fantasy"
//  });

//  function display(data) {
//     let gameDataDisplay = [
//         document.getElementById
//     ]
        
//  }










// // module.exports = {
// //     games
// // };


