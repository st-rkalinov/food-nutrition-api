class AlertUpdate {
    constructor(status) {
        this.status = status;

        this.data = {
            title: 'Success !',
            text: 'The food was edited successfully',
            icon: 'success',
            buttons: [true, 'Go to the food page']
        }
    }

    makeData() {
        switch (this.status) {
            case 422:
                this.data = {
                    text: 'There is a problem with the data you entered !',
                    buttons: [true, true],
                    icon: 'error',
                    title: 'Error',
                };
                break;
            case 401:
                this.data = {
                    text: 'You are unauthorized to edit !',
                    buttons: [true, true],
                    icon: 'error',
                    title: 'Error',
                };
                break;
        }
    }

    getData() {
        this.makeData();

        return this.data;
    }
}

export default AlertUpdate;
