class AlertDelete {
    constructor(status) {
        this.status = status;
        this.data = null;
    }

    makeData() {
        switch (this.status) {
            case 204:
                this.data = {
                    text: 'The food was deleted successfully',
                    button: true,
                    icon: 'success',
                    title: 'Success',
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
                    text: 'You don\'t have the rights to delete that food !',
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

export default AlertDelete;
