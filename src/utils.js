const fs = require('fs');

exports.sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.readfile = async (directory) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs.readFileSync(directory, 'utf8'));
        } catch (error) {
            reject('error');
        }
    });
};

exports.writefile = async (path, data) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs.writeFileSync(path, data));
        } catch (error) {
            reject(error);
        }
    });
};

exports.appendfile = async (path, data) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs.appendFileSync(path, data));
        } catch (error) {
            reject(error);
        }
    });
};

exports.isEmptyObject = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

exports.removeEmptyOrNull = (array) => {
    let result = array.filter(function (el) {
        return el != null;
    });

    return result
}

exports.isEmptyObject = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}