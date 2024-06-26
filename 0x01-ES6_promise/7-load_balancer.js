// Assuming chinaDownload and USDownload are promises that resolve with some data
const chinaPromise = new Promise(resolve => setTimeout(() => resolve('Data from China'), 2000));
const usPromise = new Promise(resolve => setTimeout(() => resolve('Data from US'), 1000));

loadBalancer(chinaPromise, usPromise)
  .then(result => {
    console.log('Resolved first:', result); // Logs 'Data from US' if USPromise resolves first
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors that might occur during the promises
  });
