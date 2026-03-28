function test(){
    return "H\nr\ni\ns\nh\ni"
}

// console.log(test());

function add(a, b = 0){
    return a + b
}

// console.log(add(2, 6));

function login(username){
    if (!username) {
        return "username field is emplty"        
    } else {
        return `${username} logged in`
    }
}

// console.log(login());


function kart(...num){
    return num
}

console.log(kart(200, 50, 500, 1200));
