//跨域
module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:3300',
                changeOrigin:true,
                pathRewriter:{
                    '^/api':''
                }
            }
        }
    }
}