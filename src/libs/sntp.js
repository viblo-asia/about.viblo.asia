/* eslint-disable */
let cachedOffset = 0

/**
 * Sync the clock with server using an sntp-like algorithm
 *
 * @returns Promise<number>
 */
export function sync () {
  return new Promise((resolve, reject) => {
    let requestTime
    let responseTime
    const req = new XMLHttpRequest()

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.HEADERS_RECEIVED && req.status === 200) {
        responseTime = Date.now()
      }
    }

    req.onload = () => {
      if (req.status === 200) {
        const serverDateStr = req.getResponseHeader('Date')
        const serverTime = new Date(serverDateStr).getTime()

        // There should also be server process time here but let's assume
        // the server is super fast (it should) so it is close to zero
        const networkLatency = (responseTime - requestTime) / 2

        cachedOffset = serverTime + networkLatency - responseTime

        resolve(cachedOffset)
      } else {
        reject(new Error({
          status: req.status,
          statusText: req.statusText
        }))
      }
    }

    req.open('HEAD', `${window.location.protocol}//${window.location.host}`)

    req.setRequestHeader('cache-control', 'no-cache')

    requestTime = Date.now()
    req.send()
  })
}

/**
 * Get current synced time. Offset is cached and default to 0
 * so one should call `sync` at least once before calling this
 */
export function now () {
  return Date.now() + cachedOffset
}
/* eslint-enable */
