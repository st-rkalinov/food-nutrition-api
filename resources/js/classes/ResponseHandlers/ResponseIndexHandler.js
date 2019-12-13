class ResponseIndexHandler {

      constructor(status, additionalEndpointData) {
        this.status = status;
        this.additonalEndpointData = additionalEndpointData;
        this.endpoint = false;
    }

    chooseEndpoint() {
        switch (this.status) {
            case 403:
            case 404:
                this.endpoint = '/';
                break;
            case 422:
                this.endpoint = false;
                break;
            case 401:
                this.endpoint = '/logout';
                break;
        }
    }

    getEndpoint() {
        this.chooseEndpoint();

        return this.additonalEndpointData === '' ? (this.endpoint) : (this.endpoint + this.additonalEndpointData);
    }
}

export default ResponseIndexHandler;
