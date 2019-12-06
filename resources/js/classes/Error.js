class Error {
    constructor(fields) {
        for(let field in fields) {
            if(fields.hasOwnProperty(field)) {
                this[field] = null;
            }
        }
    }

    hasError(fieldName) {
        return !(!this.hasOwnProperty(fieldName) || this[fieldName] === null);
    }

    getError(fieldName) {
        if(this[fieldName]) {
            return this[fieldName];
        }
    }

    clearError(fieldName) {
        if(this[fieldName]) {
            this[fieldName] = null;
        }
    }
}

export default Error;
