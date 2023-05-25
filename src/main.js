function findUserAndCallback(id, cb){
    setTimeout(function () {
        console.log("waited 0.1 sec.");
        user = {
            id: id,
            name : "User " + id,
            email: id + "@test.com"
        };
        cb(user);
    }, 100);
    let user;
    return user;
}

const user = findUserAndCallback(1, function (user) {
    console.log("user", user);
})