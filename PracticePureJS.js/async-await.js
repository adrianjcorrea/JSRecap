function makeRequest(location){
  return new Promise((resolve, reject) =>{
      console.log(`EMaking request to ${location}`);
      if(location === 'Google'){
          resolve('Google says Hi')
      } else {
          reject('We can only talk to Google');
      }
  })
}

function processRequest(response){
  return new Promise((resolve, reject) => {
      console.log('Processing Response');
      resolve(`Extra imformation + ${response}`)
  })
}

// makeRequest('Google').then(response => {
//     console.log("RESPONSE RECEIVED")
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })


async function doWork(){
    try {
        const response = await makeRequest('Facebook')
        console.log('Response Received');
        const processedResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork()