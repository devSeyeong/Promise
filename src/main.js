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

// using Promise
findUser(1).then(function (user) {
    console.log("user:", user);
});

function findUser(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("waited 0.1 sec.");
            const user = {
                id: id,
                name: "User" + id,
                email: id +"@test.com",
            };
            resolve(user);
        }, 100)
    });
}

function devide(numA, numB) {
    return new Promise((resolve, reject) => {
        if(numB === 0) reject(new Error("Unable to devide by 0."));
        else resolve(numA / numB);
    });
}

devide(8,2).then((result) => console.log("성공", result)).catch((error) => console.log("실패",error));
devide(8,0).then((result) => console.log("성공", result)).catch((error) => console.log("실패",error));