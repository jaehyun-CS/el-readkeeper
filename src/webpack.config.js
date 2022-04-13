module.exports = {
    // change to .tsx if necessary
    entry: './index.tsx',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        fallback: resolve.fallback: {
            "util": require.resolve("util/")
        }
        // changed from extensions: [".js", ".jsx"]
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loadeisr: 'babel-loader' }, exclude: /node_modules/ },
            { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },

            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    // addition - add source-map support
    devtool: "source-map"
};