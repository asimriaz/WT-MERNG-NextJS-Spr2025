function First(callback){
    console.log(`First`);
    callback();
}

function Second(callback){
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => console.log(`Second - ${user.name}`))
    .then(()=> callback())
}

function Third(){
    console.log(`Third`);
}

First(function(){
    Second(function(){
        Third()
    })
});
