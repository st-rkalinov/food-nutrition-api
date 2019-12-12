class AlertDelete {
    constructor(status) {
        this.status = status;

        this.data = {
            title: 'Success !',
            text: 'The food was deleted successfully',
            icon: 'success',
            button: true
        }
    }

    makeData() {
        switch (this.status) {
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
        }
    }

    getData() {
        this.makeData();

        return this.data;
    }
}

export default AlertDelete;
