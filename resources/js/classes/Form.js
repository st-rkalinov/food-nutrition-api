class Form {
    constructor(data) {
        this.originalData = data;
        this.data = {};

        for (let field in data) {
            if (data.hasOwnProperty(field)) {
                this.data[field] = data[field];
            }
        }
    }

    submit(path) {
        axios.post(path, this.data)
            .then((response) => {
                console.log(response);
                this.reset();
            })
            .catch(error => {
                console.log(error.response);
            })
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
