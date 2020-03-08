let libs = {
    'bootstrap/dist': 'bootstrap',
    'jquery/dist': 'jquery',
    'angular': 'angular',
    'angular-route': 'angular-route',
    '@fortawesome/fontawesome-free': 'fontawesome',
};

const fs = require('fs');
const path = require('path');

function copy(source, destination) {
    let sourceStat = fs.statSync(source);
    if (sourceStat.isFile()) {
        fs.copyFileSync(source, destination);
    } else if (sourceStat.isDirectory()) {
        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination);
        } else if (!fs.statSync(destination).isDirectory()) {
            throw new Error("What are you doing? " + destination + " is not a directory.");
        }
        fs.readdirSync(source).forEach((item) => {
            copy(path.join(source, item), path.join(destination, item));
        });
    } else {
        throw new Error("This is unprecedented. Panicking.");
    }
}

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('vendor-files', () => {
        let vendor = path.join(__dirname, 'app', 'static', 'vendor');
        if (!fs.existsSync(vendor)) {
            fs.mkdirSync(vendor);
        } else if (!fs.statSync(vendor).isDirectory()) {
            throw new Error("What are you doing? " + destination + " is not a directory.");
        }
        Object.keys(libs).forEach((source) => {
            // Platform-agnostic path resolution.
            let sourcePath = path.join(__dirname, 'node_modules', source.replace(/\//g, path.sep));
            let destinationPath = path.join(vendor, libs[source].replace(/\//g, path.sep));
            copy(sourcePath, destinationPath);
        });
    });

    // Default task(s).
    grunt.registerTask('default', ['vendor-files']);

};