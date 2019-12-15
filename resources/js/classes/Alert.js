import swal from 'sweetalert';
import AlertCreateData from "./Alerts/AlertCreateData";
import AlertUpdateData from "./Alerts/AlertUpdateData";
import AlertIndexData from "./Alerts/AlertIndexData";
import AlertDeleteData from "./Alerts/AlertDeleteData";
import AlertShowData from "./Alerts/AlertShowData";

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
                this.alert = new AlertCreateData(status);
                break;
            case 'update':
                this.alert = new AlertUpdateData(status);
                break;
            case 'index':
                this.alert = new AlertIndexData(status);
                break;
            case 'delete':
                this.alert = new AlertDeleteData(status);
                break;
            case 'show':
                this.alert = new AlertShowData(status);
        }
    }

    show(status) {
        this.chooseAlertHandler(status);
        this.swalData = this.alert.getData() ? this.alert.getData() : this.swalData;


        return this.swal(this.swalData);
    }
}

export default Alert;
