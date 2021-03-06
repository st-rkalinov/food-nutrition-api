import FormError from "./FormError";

class Form {
    constructor(data) {
        this.originalData = data;
        this.data = {};
        this.error = new FormError(data);

        for (let field in data) {
            if (data.hasOwnProperty(field)) {
                this.data[field] = data[field];
            }
        }
    }

    submit(path, method = 'post') {

        return axios[method](path, this.data);
    }

    reset() {
        for (let originalField in this.originalData) {
            if (this.data.hasOwnProperty(originalField) && this.originalData.hasOwnProperty(originalField)) {
                this.data[originalField] = this.originalData[originalField];
            }
        }
    }

}

export default Form;
