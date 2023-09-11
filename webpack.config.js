const path = require('path');

module.exports ={
    entry:'./script/src/index.js',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'my-project-bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // Adicione extensões TypeScript
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
     
}