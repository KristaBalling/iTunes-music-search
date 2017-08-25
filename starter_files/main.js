/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let audio = document.querySelector('.music-player');
let submitButton = document.querySelector('#submitButton');
let searchForm = document.querySelector('.search-form');
let row = document.querySelector('.row');
let textBox = document.querySelector('#textbox');


submitButton.addEventListener('click', function(ev){
  ev.preventDefault();

fetch("https://itunes.apple.com/search?term="+textBox.value)
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Here is the data:", data);
// build template literal using data[0] for your values

let templateArray = "";

for (let i=0; i < data.results.length; i++) {



let template = `
          <div>
          <img src="${data.results[i].artworkUrl30}">

            <h4>${data.results[i].trackName}</h4>

            <h4>${data.results[i].artistName}</h4>
            <button class="playMusic" type="button" data-type="${data.results[i].previewUrl}">Play</button>
            </div>
`;

//when user clicks play button, music plays
//add a play button
//make button clickable
//make it play the right song
// concat template to a variable that you defined outside of the loop
// over and over until there are no more songs

templateArray = (templateArray + template);

}
row.innerHTML= templateArray;

let playMusic = document.querySelectorAll(".playMusic");
for (let i=0; i < playMusic.length; i++) {
playMusic[i].addEventListener('click', function(){
audio.src = playMusic[i].dataset.type;

})
}
// append template literals to html?
// make the template appear once on page, then write a for loop to make them all show up
// write for loop above template literals or else i will be undefined
//document.querySelector + innerhtml to tl to innerhtml



    });
  });
