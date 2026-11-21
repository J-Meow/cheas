import http from "node:http"

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://place.holder")
    switch (url.pathname) {
        case "/":
            res.writeHead(200)
            res.end(
                "cheas is running here\nmore info: https://github.com/J-Meow/cheas",
            )
            break
        default:
            res.writeHead(404)
            res.end()
    }
})

server.listen(7855)
