import ResponseCreateHandler from "./ResponseHandlers/ResponseCreateHandler";
import ResponseUpdateHandler from "./ResponseHandlers/ResponseUpdateHandler";
import ResponseIndexHandler from "./ResponseHandlers/ResponseIndexHandler";
import Alert from "./Alert";
import ResponseDeleteHandler from "./ResponseHandlers/ResponseDeleteHandler";
import ResponseShowHandler from "./ResponseHandlers/ResponseShowHandler";

class ResponseHandlerStrategy {
    constructor(router, action) {
        this.router = router;
        this.action = action;
        this.handler = null;
        this.alert = new Alert(action);
    }

    chooseHandler(status, additionalEndpointData) {
        switch (this.action) {
            case 'create':
                this.handler = new ResponseCreateHandler(status, additionalEndpointData);
                break;
            case 'update':
                this.handler = new ResponseUpdateHandler(status, additionalEndpointData);
                break;
            case 'index':
                this.handler = new ResponseIndexHandler(status, additionalEndpointData);
                break;
            case 'delete':
                this.handler = new ResponseDeleteHandler(status, additionalEndpointData);
                break;
            case 'show':
                this.handler = new ResponseShowHandler(status, additionalEndpointData);
        }
    }


    handle(status, additionalEndpointData = '') {
        return this.alert.show(status)
            .then((clickedButton) => {
                if(clickedButton) {
                    this.chooseHandler(status, additionalEndpointData);
                    let endpoint = this.handler.getEndpoint();

                    if(endpoint == false) {
                        return;
                    }

                    this.router.push(endpoint);
                }
            });
    }
}

export default ResponseHandlerStrategy;
