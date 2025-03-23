
const SIMBOLS = Object.freeze({
  INITIAL_PARAMS: '?',
  NEXT_PARAM: '&',
  CONCAT_VALUE: '='
})

export class ServiceManager {
  constructor(config = {}) {
    this.config = config;
  }

  get params() {
    const { params = {} } = this.config;
    const paramsList = Object.entries(params);
    const hasParams = paramsList.length > 0;

    if (!hasParams) return '';

    const paramsConcat = paramsList.map(([key, value], position) => {
      const currentPosition = position + 1
      const isLastPosition = currentPosition === paramsList.length
      const nextParamSimbol = isLastPosition ? '' : SIMBOLS.NEXT_PARAM

      return `${key}${SIMBOLS.CONCAT_VALUE}${value}${nextParamSimbol}`
    })

    const paramsJoin = `${SIMBOLS.INITIAL_PARAMS}${paramsConcat.join('')}`

    return paramsJoin
  }

  async generateRequest(config = {}) {
    try {
      const { host } = this.config;
      const URL = `${host}${this.path}${this.params}`;
      const response = await fetch(URL, config)
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}