

***--------This project is still under Development !!, some premade settings can NOT perform as you expected, Please dont hesitate to share your thoughts / ideas / suggestions--------***



-------------How to run-------------

yarn or npm i //To install all packages
yarn run dev // to start the development server with nodemon
yarn start // to start production server



#Starting file is index.js > app.js






--This boilerplate is designed for heavy computations/ high traffic requestes

--Since my priority is MongoDb, all boilerplate settings is set for MongoDb 

--Please dont forget to create your own .env file and import all using config file located in ./Utilities/config.js

--Build Folder is for your Frontend files

--All db, related Models and routes,endpoints etc.. are just useful examples, change them as your applicatin design require



#İf you dont have a postGreSql server you can test your server at elephantsql.com with FREE account

-------------NPM Libaries/Packages-------------

#Cloudinary is for developers , better way to upload, manage and deliver tens of thousands to millions of images and videos. Using artificial intelligence (AI), automation, and advanced patent-pending image and video processing capabilities

#Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

#Morgan HTTP request logger middleware for node.js

#Pg(node-postgres)  Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.

#Mongoose Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).



#You can use these options to change your settings     //for more options use yarn help or yarn help add & npm help or npm help install
{
    --verbose // can use almost for all processes of yarn/npm to get detailed output
    -D or --dev // install the packages for development version of your application
    -E or --exact // install exact version
    -T or --tilde // install most recent release with the same minor version

}


yarn add --dev nodemon@latest --verbose or npm i --save-dev nodemon@latest --verbose // install latest version of nodemon package and save as development dependency





#If you're running a Windows OS and running via a .js file you'll need to set the UV_THREADPOOL_SIZE prior to calling the script via node.

Example in cmd: SET UV_THREADPOOL_SIZE=2 && node my-file-to-run.js (no spaces around the =)

Or in Powershell: $env:UV_THREADPOOL_SIZE = 2 && node my-file-to-run.js

***Why ???? If You don't set this env variable, limited to a threadpool of 4 threads, which is the default size of the threadpool.***




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






