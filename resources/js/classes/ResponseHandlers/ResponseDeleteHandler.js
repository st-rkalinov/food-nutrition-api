class ResponseDeleteHandler {

      constructor(status, additionalEndpointData) {
        this.status = status;
        this.additonalEndpointData = additionalEndpointData;
        this.endpoint = false;
    }

    chooseEndpoint() {
        switch (this.status) {
            case 204:
            case 403:
            case 404:
                this.endpoint = '/foods';
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

export default ResponseDeleteHandler;
