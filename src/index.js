const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //two examples of pulling the value from the json object
    //console.log(e.target.children[1].value);
       const input = document.getElementById("searchByID");
   
    //set up a fetch request for our movies object from the mock JSON
    //WHY IS THIS INPUT RETURNING UNDEFINDED
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
            inputForm.reset();
        });
        
    });

}

document.addEventListener('DOMContentLoaded', init);