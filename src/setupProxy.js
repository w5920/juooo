const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }));
    app.use("/userLogin", createProxyMiddleware({
        target: "http://127.0.0.1:8085",
        changeOrigin: true,
        pathRewrite: {
            "^/userLogin": ""
        }
    }))
}