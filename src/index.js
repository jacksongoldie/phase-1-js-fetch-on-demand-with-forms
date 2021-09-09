const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //two examples of pulling the value from the json object
    //console.log(e.target.children[1].value);
       const input = console.log(document.getElementById("searchByID").value);
   
    //set up a fetch request for our movies object from the mock JSON
        fetch('http://localhost:3000/movies/' + input)
        .then(resp => resp.json())
        .then(data => console.log(data));

    });
}

document.addEventListener('DOMContentLoaded', init);