import { EMPTY_STRING, HEADERS, METHOD_GET, NULL, URL } from './constants.js'

export const request = async ({ method, body, endpoint }) => {
  try {
    const METHOD = method || METHOD_GET
    const BODY = JSON.stringify(body) || NULL
    const ENDPOINT = endpoint || EMPTY_STRING

    const response = await fetch(URL + ENDPOINT, {
      method: METHOD,
      headers: HEADERS,
      body: BODY,
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}
