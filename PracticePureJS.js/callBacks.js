//Using Callbacks 
const userLeft = true;
const userWatchingMovie = false;

function watchMovieCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchingMovie){
        errorCallback({
            name: 'User is still watching the movie',
            message: 'webSimpleMovie :)'
        });
    } else {
        callback('Give a thumbs up for Movie');
    }
}

watchMovieCallback((message) =>{
    console.log("Success" + message);
}, (err) => {
    console.log(err.name + ' ' + err.message);
})

