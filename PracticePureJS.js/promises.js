let p = new Promise((resolve, reject) => {
    let a = 5 * 1 + 1;
  if(a === 11){
      resolve("Passed");
  } else {
      reject("Failed to pass");
  }
});

//Then is runned and returned when resolve logic is true.
//Catch is eunned and returned when resolve logic is false and reject is returned from promise.
p.then((message) =>{
    console.log("This is in then, meaning " + message + " Is true");
}).catch((message) => {
    console.log("Caught Error in catch = " + message);
});



//Converte callback to Promise 
//Using Callbacks 
const userLeft = true;
const userWatchingMovie = false;

function watchMovieCallback(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingMovie){
            reject({
                name: 'User is still watching the movie',
                message: 'webSimpleMovie :)'
            });
        } else {
            resolve('Give a thumbs up for Movie');
        }
    });
}


watchMovieCallback().then((message) =>{
    console.log("Success" + message);
}).catch((err) => {
    console.log(err.name + ' ' + err.message);
});

