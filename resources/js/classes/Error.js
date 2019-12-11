class Error {
    constructor(fields) {
        for(let field in fields) {
            if(fields.hasOwnProperty(field)) {
                this[field] = null;
            }
        }
    }

    setErrors(errorFields) {
        for(let field in errorFields) {
            if(errorFields.hasOwnProperty(field)) {
                this[field] = errorFields[field][0];
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
