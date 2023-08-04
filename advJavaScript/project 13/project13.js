let allowed = ["2020", "Huawei", "Forces"];

function passwordChecker(Forces) {
    return allowed.includes(Forces);
}

function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordChecker(password)) {
            resolve({
                ValidityState: true
            });
        } else {
            reject({
                ValidityState: false
            })
        }
    })
}

function checker(Forces) {
    login(Forces)
        .then(token=>{
            console.log("Approve:");
            console.log(token);
        })
        .catch(value=> {
            console.log("Reject:");
            console.log(value);
        })
}
checker("2020");
checker("mushroom");
