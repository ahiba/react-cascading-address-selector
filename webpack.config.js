module.exports = {
    entry: [
      './assets/js/entry.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { test: /\.jsx?$/, loaders: ['jsx-loader?harmony'] },
          { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
        ]
    }
};
