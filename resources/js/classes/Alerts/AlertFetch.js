class AlertFetch {
    constructor(status) {
        this.status = status;

        this.data = {
            text: 'There is a problem, please try again later.',
            button: true,
            icon: 'error',
            title: 'Error',
        };
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
            case 403:
                this.data = {
                    text: 'Access Forbidden',
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
