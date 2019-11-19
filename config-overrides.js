const path = require('path');
const {getBabelLoader} = require('customize-cra');

module.exports = {
    // webpack: function(config, env) {
    //     // ...add your webpack config
    //     getBabelLoader(config, true).options.plugins.push('@babel/plugin-proposal-class-properties');
    //     console.log(config);

    //     return config;
    // },

    paths: function (paths, env) {  

        // Overriding existing react build script to point to the client subdirectory. 
        paths.appBuild = path.resolve(__dirname, 'dist','client');
        paths.appIndexJs = path.resolve(__dirname, 'client', 'src', 'index.js');
        paths.appPublic = path.resolve(__dirname, 'client', 'public');
        paths.appSrc = path.resolve(__dirname, 'client', 'src');
        paths.appHtml = path.resolve(__dirname, 'client', 'public', 'index.html');
        paths.appTypeDeclarations = path.resolve(__dirname, 'node_modules', 'react-scripts', 'lib', 'react-app.d.ts');
        paths.appTsConfig = path.resolve(__dirname, 'client', 'tsconfig.json');

        return paths;
    },
}