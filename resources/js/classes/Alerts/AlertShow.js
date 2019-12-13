class AlertShow {
    constructor(status) {
        this.status = status;
        this.data = null;
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
                break;
            case 404:
                this.data = {
                    text: 'Page not found',
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

export default AlertShow
