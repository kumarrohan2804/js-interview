function retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed') {
  return new Promise((resolve, reject) => {
    const attempt = (attemptNumber) => {
      asyncFn().then(resolve).catch(error => {
        if (attemptNumber < retries) {
          console.log(`... attempt ${attemptNumber} -> retry after ${delay}ms -> failed`);
          setTimeout(() => attempt(attemptNumber + 1), delay);
        } else {
          console.log(`... ${finalError}.`);
          reject(finalError);
        }
      });
    };
    
    attempt(0);
  });
}

function asyncFn() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that may fail
    setTimeout(() => {
      // Simulate failure
      reject('Error');
    }, 100);
  });
}

retry(asyncFn)
  .then(() => console.log('Success'))
  .catch(error => console.error('Error:', error));