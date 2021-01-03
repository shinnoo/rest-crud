const content = document.querySelector('#content');
const createBtn = document.querySelector('#createBtn');
const update = document.querySelector('#updateBtn');

window.addEventListener('load', () => {
    getUsers();
});

createBtn.addEventListener('click', ()=> {
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;

    let formData = { id, name};

    fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    location.reload();
});


function getUsers(){
    let html = "";
    fetch('http://localhost:8080/api/users')
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        data.forEach(element => {
            html += `<li>${element.id} ${element.name} <a href="javascript:void(0)" onClick="deleteMember(${element.id})">Delete</a></li></li>`;
             
        });
        content.innerHTML = html;


    }).catch(error => {
        console.log(error);
    });

}

function deleteMember(id){
     fetch(`http://localhost:8080/api/users/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type' : 'application/json'
        }

     }).then(response => response.text())
     .then(response => console.log(response))
     .catch(error => console.log(error));
     location.reload();
}

update.addEventListener('click', ()=> {

    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;

    let formData = { id, name};

    fetch('http://localhost:8080/api/users', {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    location.reload();
});

