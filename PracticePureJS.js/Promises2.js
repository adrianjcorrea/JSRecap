//Promise.All / Promise.Race

const recordVideoOne = new Promise((resolve, reject)=>{
    resolve("This is video 1.");
});

const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve("This is video 2.");
});

const recordVideoThree = new Promise((resolve, reject)=>{
    resolve("This is video 3.");
});
//Promise.All runs all promises.
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree 
]).then((messages) =>{
    console.log(messages);
});

//Promise.Race returns the first promise finished.
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree 
]).then((messages) =>{
    console.log(messages);
});