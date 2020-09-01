module.exports = {
    // 基本路路径, vue.cli 3.3以前请使用baseUrl
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // ⽤用于嵌套生成的静态资产（js，css，img，fonts）的目录。
    assetsDir: '',
    lintOnSave: false,
    // ⽣生产环境sourceMap
    productionSourceMap: false,
    // webpack配置
    configureWebpack: function() {},
    chainWebpack: function() {},
    // css相关配置
    css: {
        // 启⽤用 CSS modules
        modules: false,
        // 是否使⽤用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器器配置项
        loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8080,
    //     proxy: {}, // 设置代理理
    // },
    // 第三⽅方插件配置
    pluginOptions: {
        // ...
    },
    devServer: {
        open: true,
        host: '192.168.0.131',
        port: 8080,
        https: false,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            // 配置跨域
            '/api': {
                // target: 'http://61.185.210.205:8000', // 填写后台接口
                // target: 'http://192.168.7.105:8800', // 孙旭接口
                // target: 'http://192.168.0.125:8800', // 孙旭接口
                target: 'http://192.168.0.106:8000', // 李丹接口
                ws: true,
                changOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '', // 请求的时候使用这个api就可以
                },
            },
        },
    },
}