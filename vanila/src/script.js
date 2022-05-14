const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 2000);
});

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

async function myFunc() {
  try {
    const res = await myPromise;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

myFunc();
