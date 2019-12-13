class ResponseShowHandler {
      constructor(status, additionalEndpointData) {
        this.status = status;
        this.additonalEndpointData = additionalEndpointData;
        this.endpoint = false;
    }

    chooseEndpoint() {
        switch (this.status) {
            case 401:
                this.endpoint = '/logout';
                break;
            case 403:
            case 404:
                this.endpoint = '/foods';
                break;
        }
    }

    getEndpoint() {
        this.chooseEndpoint();

        return this.additonalEndpointData === '' ? (this.endpoint) : (this.endpoint + this.additonalEndpointData);
    }
}

export default ResponseShowHandler
