const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');

document.getElementById('search-btn').addEventListener('click', searchMovie);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMovie();
    }
});

async function searchMovie() {
    
const query = searchInput.value.trim();
    const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=dad481d3`);
    const data = await response.json();
    //console.log(data.Title, data.Year, data.Rated);
    if (data.Response === "False") {
        results.innerHTML = `<p>${data.Error}</p>`;
        return;
    }
        results.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Rated:</strong> ${data.Rated}</p>
        <p><strong>Released:</strong> ${data.Released}</p>
        <p><strong>Runtime:</strong> ${data.Runtime}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <img src="${data.Poster}" alt="Movie Poster" style="width:200px;">
        
    `
}

