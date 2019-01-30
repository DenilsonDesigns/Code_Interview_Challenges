// Returns a promise that resolves with the average dimensions of all the passed in images
// Ignores any images that fail to load
async function loadImages(images) {
  let dimensions = [];
  let counter = 0;
  let widthBucket = 0;
  let heightBucket = 0;

  for (let i = 0; i < images.length; i++) {
    await fetch(images[i])
      .then(res => {
        console.log(res);
        if (!res.ok) {
          console.log("error");
        }
        // console.log(res);
        if (res.ok === true) {
          dimensions.push(makeObject(res.url));
          counter++;
          // console.log(dimensions);
        } else {
          console.log("missed me");
        }
      })
      .catch(err => {
        console.log("Failed to fetch");
      });
  }

  for (let i = 0; i < dimensions.length; i++) {
    widthBucket += dimensions[i].width;
    heightBucket += dimensions[i].height;
  }
  console.log(widthBucket / counter, heightBucket / counter);
  return { width: widthBucket / counter, height: heightBucket / counter };
}

function makeObject(str) {
  let wSlice = str.indexOf("w=");
  let hSlice = str.indexOf("h=");
  let width = Number(str.slice(wSlice + 2, wSlice + 5));
  let height = Number(str.slice(hSlice + 2, hSlice + 5));

  return { width: width, height: height };
}

//EXPECTED ANSWER
const expected = { width: 260, height: 328 };

const images = [
  {
    width: 150,
    height: 150
  },
  {
    width: 350,
    height: 350
  },
  {
    width: 100,
    height: 440
  },
  {
    width: 500,
    height: 200
  },
  {
    width: 200,
    height: 500
  }
];

let imageUrls = images.map(
  ({ width, height }) =>
    `https://placeholdit.imgix.net/~text?txtsize=40&txt=${width}x${height}&w=${width}&h=${height}`
);

imageUrls = imageUrls.concat([
  "https://not.a.real.domain/bad-image.jpg",
  "https://fake-site.fake/bad-image.jpg"
]);

loadImages(imageUrls);
