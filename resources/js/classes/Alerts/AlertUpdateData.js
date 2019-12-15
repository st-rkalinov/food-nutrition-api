class AlertUpdateData {
    constructor(status) {
        this.status = status;
        this.data = null;
    }

    makeData() {
        switch (this.status) {
            case 200:
                this.data = {
                    text: 'The food was edited successfully',
                    buttons: [true, 'Go to the food page'],
                    icon: 'success',
                    title: 'Success',
                };
                break;
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

export default AlertUpdateData;
