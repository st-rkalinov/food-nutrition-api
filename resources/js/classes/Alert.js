import swal from 'sweetalert';
import AlertCreate from "./Alerts/AlertCreate";
import AlertUpdate from "./Alerts/AlertUpdate";

class Alert {
    constructor(action, status) {
        this.swal = swal;
        this.alert = null;

        switch (action) {
            case 'create':
                this.alert = new AlertCreate(status);
                break;
            case 'update':
                this.alert = new AlertUpdate(status);
                break;
        }
    }

    show() {
        if( this.alert ) {

            return this.swal(this.alert.getData());
        }
    }
}

export default Alert;
