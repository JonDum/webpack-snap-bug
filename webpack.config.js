module.exports = {

    entry: './js/main.js',

    output: {
        filename: 'bundle.js'       
    },

    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "css", "js"]
    }

};
