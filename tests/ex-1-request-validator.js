function validateRequest(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    if (!request.method || !methods.includes(request.method)) {
        throw Error("Invalid request header: Invalid Method")
    }
    const reg = /^[a-zA-Z0-9\.]*$/
    if (!request.uri || !reg.test(request.uri)) {
        if (request.uri != '*') {
            throw Error("Invalid request header: Invalid URI")
        }
    }
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!request.version || !versions.includes(request.version)) {
        throw Error('Invalid request header: Invalid Version')
    }
    const pattern = /[\<\>'\&"\\]/
    if (!request.message || pattern.test(request.message)) {
        if (request.message != '') {
            throw Error('Invalid request header: Invalid Message')
        }
    }

    return request
}


validateRequest({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
})
validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
})