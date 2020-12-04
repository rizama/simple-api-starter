const fs = require('fs');

exports.sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.readfile = async (directory) => new Promise((resolve, reject) => {
  try {
    resolve(fs.readFileSync(directory, 'utf8'));
  } catch (error) {
    reject(error);
  }
});

exports.writefile = async (path, data) => new Promise((resolve, reject) => {
  try {
    resolve(fs.writeFileSync(path, data));
  } catch (error) {
    reject(error);
  }
});

exports.appendfile = async (path, data) => new Promise((resolve, reject) => {
  try {
    resolve(fs.appendFileSync(path, data));
  } catch (error) {
    reject(error);
  }
});

exports.removeEmptyOrNull = (array) => {
  const result = array.filter((el) => el != null);

  return result;
};
