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
                    button: true,
                    icon: 'error',
                    title: 'Error',
                };
                break;
            case 401:
                this.data = {
                    text: 'You are unauthorized !',
                    buttons: true,
                    icon: 'error',
                    title: 'Error',
                };
                break;
            case 403:
                this.data = {
                    text: 'You don\'t have the rights to edit that food !',
                    button: true,
                    icon: 'error',
                    title: 'Error',
                };
        }
    }

    getData() {
        this.makeData();

        return this.data;
    }
}

export default AlertUpdate;
