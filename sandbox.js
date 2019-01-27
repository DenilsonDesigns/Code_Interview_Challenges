// Returns a promise that resolves with the average dimensions of all the passed in images
// Ignores any images that fail to load
function loadImages(images) {
  let dimensions = {};
  let counter = 0;
  let widthBucket, heightBucket;

  fetch(images[0]).then(res => {
    console.log(res);
    if (res.ok === true) {
      console.log("got em");
    } else {
      console.log("missed me");
    }
  });
}

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

const imageUrls = images.map(
  ({ width, height }) =>
    `https://placeholdit.imgix.net/~text?txtsize=40&txt=${width}x${height}&w=${width}&h=${height}`
);

loadImages(imageUrls);
// describe('Asynchronously load multiple images and average out their dimensions', () => {

// 	it('Returns the average width and height of all the images', () => {
// 		return loadImages(imageUrls).then(dimensions => {
// 			dimensions.should.have.keys('width', 'height');

// 			dimensions.should.eql(expected);
// 		});
// 	});

// 	// Images that fail to load should not be counted towards the averages
// 	it('Ignores images that fail to load', () => {
// 		const imagesUrlsWithBadImage = imageUrls.concat([
// 			'https://not.a.real.domain/bad-image.jpg',
// 			'https://fake-site.fake/bad-image.jpg',
// 		]);

// 		return loadImages(imagesUrlsWithBadImage).then(dimensions => {
// 			dimensions.should.have.keys('width', 'height');
// 			dimensions.should.eql(expected);
// 		});
// 	});
// });
