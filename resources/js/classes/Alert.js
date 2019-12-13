import swal from 'sweetalert';
import AlertCreate from "./Alerts/AlertCreate";
import AlertUpdate from "./Alerts/AlertUpdate";
import AlertIndex from "./Alerts/AlertIndex";
import AlertDelete from "./Alerts/AlertDelete";
import AlertShow from "./Alerts/AlertShow";

class Alert {
    constructor(action) {
        this.swal = swal;
        this.alert = null;
        this.action = action;
        this.swalData = {
            text: 'There is a problem in our system please try again later !',
            button: true,
            icon: 'error',
            title: 'Error',
        }

    }

    chooseAlertHandler(status) {
        switch (this.action) {
            case 'create':
                this.alert = new AlertCreate(status);
                break;
            case 'update':
                this.alert = new AlertUpdate(status);
                break;
            case 'index':
                this.alert = new AlertIndex(status);
                break;
            case 'delete':
                this.alert = new AlertDelete(status);
                break;
            case 'show':
                this.alert = new AlertShow(status);
        }
    }

    show(status) {
        this.chooseAlertHandler(status);
        this.swalData = this.alert.getData() ? this.alert.getData() : this.swalData;


        return this.swal(this.swalData);
    }
}

export default Alert;
