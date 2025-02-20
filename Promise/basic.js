function First(){
    console.log(`First`);
}

function Second(){
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => console.log(`Second - ${user.name}`))
}

function Third(){
    console.log(`Third`);
}

First();
Second();
Third();