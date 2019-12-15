import ResponseCreateEndpoint from "./ResponseEndpoints/ResponseCreateEndpoint";
import ResponseUpdateEndpoint from "./ResponseEndpoints/ResponseUpdateEndpoint";
import ResponseIndexEndpoint from "./ResponseEndpoints/ResponseIndexEndpoint";
import Alert from "./Alert";
import ResponseDeleteEndpoint from "./ResponseEndpoints/ResponseDeleteEndpoint";
import ResponseShowEndpoint from "./ResponseEndpoints/ResponseShowEndpoint";

class ResponseHandler {
    constructor(router, action) {
        this.router = router;
        this.action = action;
        this.endpoint = null;
        this.alert = new Alert(action);
    }

    chooseEndpoint(status, additionalEndpointData) {
        switch (this.action) {
            case 'create':
                this.endpoint = new ResponseCreateEndpoint(status, additionalEndpointData);
                break;
            case 'update':
                this.endpoint = new ResponseUpdateEndpoint(status, additionalEndpointData);
                break;
            case 'index':
                this.endpoint = new ResponseIndexEndpoint(status, additionalEndpointData);
                break;
            case 'delete':
                this.endpoint = new ResponseDeleteEndpoint(status, additionalEndpointData);
                break;
            case 'show':
                this.endpoint = new ResponseShowEndpoint(status, additionalEndpointData);
        }
    }


    handle(status, additionalEndpointData = '') {
        return this.alert.show(status)
            .then((clickedButton) => {
                if(clickedButton) {
                    this.chooseEndpoint(status, additionalEndpointData);
                    let endpoint = this.endpoint.getEndpoint();

                    if(endpoint == false) {
                        return;
                    }

                    this.router.push(endpoint);
                }
            });
    }
}

export default ResponseHandler;
