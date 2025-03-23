import { ServiceManager } from "./service-manager";

export class ServiceGET extends ServiceManager {
  constructor(config = {}) {
    super();
    this.config = config;
  }

  generateRequest() {
    return super.generateRequest({
      method: 'GET',
    });
  }
}