const fs = require('fs');
const file = fs.createWriteStream('./file.txt');

for (var i = 0; i <= 10; i++) {
    file.write('Implement some kind of logic, that separates the uploaded images for memes in different folders. For example, if you want to separate the images in such a way, that each folder holds up to 1000 images, when the server receives the 1001 image, it should create new folder, that will hold another 1000 images and so on.');
}

file.end();