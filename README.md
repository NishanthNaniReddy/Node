GET api to fetch filtered api(https://api.lloydsbank.com/open-banking/v2.2/branches) response based on header location.
So, user will get the response of filtered bank branches based on the heared value.
There is an middleware which validates header (required and string).

URL to test in postman http://localhost:3000/getBranch
header: 
        KEY:    'lbg-txn-branch-location'
        VALUE:  'london'

Pull the code and run "npm install" command to install all dependencies.
And run "node index.js"/"nodemon" command to launch application.

commands:

$ npm install // install dependencies
$ npm start   // initiate server
$ npm test    // for unit test cases