function First(){
    console.log(`First`);
}

async function Second(){
    await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => console.log(`Second - ${user.name}`))
}

function Third(){
    console.log(`Third`);
}

(async()=>{
    First();
    await Second();
    Third();
})()