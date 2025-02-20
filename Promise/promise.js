function First() {
    return new Promise(resolve => resolve(`First`));
}

function Second() {
    return new Promise(resolve =>
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(user => resolve(`Second - ${user.name}`))
    )
}

function Third() {
    return new Promise(resolve => resolve(`Third`));
}

First()
    .then(data => console.log(data))
    .then(() => Second().then(data => console.log(data))
        .then(() => Third().then(data => console.log(data))))