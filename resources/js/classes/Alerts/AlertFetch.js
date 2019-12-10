class AlertFetch {
    constructor(status) {
        this.status = status;

        this.data = {
            title: 'Success !',
            text: 'Foods were fetched successfully !',
            icon: 'success',
            buttons: [true, 'Go to the food page']
        }
    }

    makeData() {
        switch (this.status) {
            case 401:
                this.data = {
                    text: 'You are unauthorized !',
                    button: true,
                    icon: 'error',
                    title: 'Error',
                };
                break;
            default:
                this.data = {
                    text: 'There is a problem, please try again later.',
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

export default AlertFetch;
