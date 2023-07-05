function fetchFilms() {
    fetch('http://localhost:3000/films')
      .then(res => res.json())
      .then(data => {
        fetchMovieData(data);
      });
  }
  
  
  document.addEventListener('DOMContentLoaded', (e) => {
    fetchFilms()
    e.preventDefault()
  }); 
  
  function fetchMovieData(films) {
    let water = document.getElementById("movie-place");
  
    films.forEach(film => {
      let spider = document.createElement("div");
      spider.classList = "stone"
      spider.innerHTML = film.title;
      water.appendChild(spider);
  
      
      spider.addEventListener("click", function() {
        displayFilmDetails(film);
      });
    });
  }
  
  function displayFilmDetails(film) {
    fetch(`http://localhost:3000/films/${film.id}`)
      .then(res => res.json())
      .then(data => {
        movies(data)
  
      })
  }
  function movies(red){
    let black=document.querySelector("#yellow")
    black.innerHTML=`
    <img src="${red.poster}"alt="awesome movie" />
    <p> ${red.description}<p/>
    <p> <em>Tickets sold: </em>${red.tickets_sold}<p/>
    <p> <em>Showtime:</em>${red.showtime}<p/>
    <p> <em>Capacity:</em>${red.capacity}<p/>
    <p> <em>Runtime:</em>${red.runtime}<p/>
    `
  }

 
  