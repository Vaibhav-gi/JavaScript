const uname = document.getElementById('uname')
const mname = document.getElementById('mname');
const myear = document.getElementById('myear');
let movie = []
document.getElementById('myForm').addEventListener('submit', function (e)
{
    e.preventDefault();
    console.log("hi")
    addMovie();
})
function addMovie ()
{
    let pmovie = {
        URL:uname.value,
        name: mname.value,
        year: myear.value
    }
    movie.push(pmovie)
    displayMovie(movie)
}
const mainDiv = document.getElementById('main')
function displayMovie (movie)
{
    mainDiv.textContent = ''
    movie.forEach((ele,ind) =>
    {
        const pDiv = document.createElement('div');
        const prurl = document.createElement('img');
        prurl.style.width ="200px"
        prurl.src = ele.URL
        const prName = document.createElement('p');
        prName.textContent = ele.name
        const pyear = document.createElement('p');
        pyear.textContent= ele.year
        pDiv.append(prurl, prName, pyear);
        mainDiv.appendChild(pDiv)
    })
}
let select = document.getElementById("myear");
select.addEventListener("change",function(){

})

document.getElementById("myears").addEventListener('change', function ()
{
    const yar = document.getElementById("myears")
    let newMovie = movie.filter((ele,ind) =>
    {
        return ele.year == yar.value
    })
    displayMovie(newMovie)
})