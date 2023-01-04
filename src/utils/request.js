import {
  EMPTY_STRING,
  HEADERS_JSON,
  METHOD_GET,
  NULL,
  URL,
} from './constants.js'

export const request = async ({ method, body, endpoint }) => {
  const METHOD = method || METHOD_GET
  const BODY = body || NULL
  const ENDPOINT = endpoint || EMPTY_STRING

  const response = await fetch(URL + ENDPOINT, {
    method: METHOD,
    headers: HEADERS_JSON,
    body: BODY,
  })
  const data = await response.json()
  return data
}
