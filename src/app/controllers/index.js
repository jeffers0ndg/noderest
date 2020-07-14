const fs = require('fs');
const path = require('path');

mondule.exports = app => {
    fs
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !==  0 && (file !== 'index.js')))
        .forEach(file => require(patch.resolve(__dirname, file))(app));
}