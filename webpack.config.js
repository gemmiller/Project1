module.exports ={
    entry: './public/index.jsx',
    output:{
        path: __dirname+'/public',
        filename: 'bundle.js'
    }, 
    externals:{
        'fabric':'fabric'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
        ]
    }
};
