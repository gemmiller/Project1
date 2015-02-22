module.exports ={
    entry: './public/index.jsx',
    output:{
        path: __dirname+'/public',
        filename: 'bundle.js'
    }, 
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
        ]
    }
};
