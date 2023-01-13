
-------------How to run-------------

yarn or npm i //To install all packages
yarn run dev // to start the development server with nodemon
yarn start // to start production server



//**Please dont forget to create your own .env file and import all using config file located in ./Utilities/config.js

//**Build Folder is for your Frontend files

//**All db and related Models etc.. are just useful examples, Change them as your applicatin design require






#You can use these options to change your settings     //for more options use yarn help or yarn help add & npm help or npm help install
{
    --verbose // can use almost for all processes of yarn/npm to get detailed output
    -D or --dev // install the packages for development version of your application
    -E or --exact // install exact version
    -T or --tilde // install most recent release with the same minor version

}


yarn add --dev nodemon@latest --verbose or npm i --save-dev nodemon@latest --verbose // install latest version of nodemon package and save as development dependency







#From https://stackoverflow.com/a/28102675

+ Use * as the version for the latest releases, including unstable
+ Use latest as version definition for the latest stable version
+ Modify the package.json with exactly the latest stable version number using LatestStablePackages

Here is an example:

"dependencies": {
        "express": "latest"  // using the latest STABLE version
    ,   "node-gyp": "latest"    
    ,   "jade": "latest"
    ,   "mongoose": "*" // using the newest version, may involve the unstable releases
    ,   "cookie-parser": "latest"
    ,   "express-session": "latest"
    ,   "body-parser": "latest"
    ,   "nodemailer":"latest"
    ,   "validator": "latest"
    ,   "bcrypt": "latest"
    ,   "formidable": "latest"
    ,   "path": "latest"
    ,   "fs-extra": "latest"
    ,   "moment": "latest"
    ,   "express-device": "latest"
},