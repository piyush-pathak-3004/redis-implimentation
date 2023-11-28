const client = require('./client');

async function setUser(userId, userName) {
    try {
        await client.set(`user:${userId}`, userName);
    } catch(e) {
        console.log("error in seting the value..." + e);
    }
}

// Function to get user data from Redis
async function getUser(userId) {
    try {
        let userName = await  client.get(`user:${userId}`);
        console.log("the cached name is "+ userName);
        
    } catch(e) {
        console.log("error in seting the value..." + e);
    }
}


setUser(1,"Piyush");
setUser(2,"Hemant");
setUser(3,"Shubham");

getUser(2);

var shivrajan = {
    name:"shivranjan",
    age:22
}
setUser(4,shivrajan);

getUser(4);
