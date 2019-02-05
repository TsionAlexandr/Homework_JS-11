class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
    
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();



let allUsers = document.getElementById("all-users");
let info = document.getElementById("info");



httpClient.get('https://jsonplaceholder.typicode.com/users', function(response) {
    
    users = JSON.parse(response);

    users.forEach(function(user) {
        allUsers.insertAdjacentHTML("afterend", `<a class="users-item"  id="users-${user.id}" href="#">${user.name}</a>`);
    });
});



addEventListener("click", function(e) {
    
    let id = e.target.id.replace("users-","");
    
    let user = users.filter(function(user) {return user.id === +id});

    info.innerHTML = `
        <ul>
            <li>name: ${user[0].name}</li>
            <li>username: ${user[0].username}</li>
            <li>email: ${user[0].email}</li>
            <li>
                <b>address</b>()
                <ul>
                    <li>street: ${user[0].address.street}</li>
                    <li>suite: ${user[0].address.suite}</li>
                    <li>city: ${user[0].address.city}</li>
                    <li>zipcode: ${user[0].address.zipcode}</li>
                    <li><b>geo</b></li>
                    <ul>
                        <li>lat: ${user[0].address.geo.lat}</li>
                        <li>lng: ${user[0].address.geo.lng}</li>
                    </ul>
                </ul>
            </li>
            <li>phone: ${user[0].phone}</li>
            <li>website: ${user[0].website}</li>
            <li>
                <b>company</b>
                <ul>
                    <li>name: ${user[0].company.name}</li>
                    <li>catchPhrase: ${user[0].company.catchPhrase}</li>
                    <li>bs: ${user[0].company.bs}</li>
                </ul>
            </li>
        </ul>
    `;    
});