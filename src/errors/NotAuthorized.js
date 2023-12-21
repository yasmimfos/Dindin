class NotAuthorized extends Error {
    constructor(message) {
        super(message);
        this.name = "NotAuthorized";
    }
}

module.exports = NotAuthorized;