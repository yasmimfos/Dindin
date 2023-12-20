const verifyCategoryExists = require('./verifyCategoryExists');
const pendencies = require('./pendencies');
const verifyEmails = require('./verifyEmails');
const verifyUserExists = require('./verifyUserExists');
const verifyCategoryBeforeCreation = require('./verifyCategryBeforeCreation');

module.exports = {
    verifyCategoryExists,
    verifyEmails,
    verifyUserExists,
    pendencies,
    verifyCategoryBeforeCreation
}
