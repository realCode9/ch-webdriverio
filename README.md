#Installation
This project is tested on Node v12.0.0 and above. While earlier versions of node may be compatible, but they have not been verified.

Node.JS: Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added node_modules/.bin to your $PATH. Otherwise you will need to install npm install -g grunt-cli globally.

JDK 1.8: It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start Selenium Server on your local environment nothing else.

#To start
Clone the branch locally
Run npm i

#Run Tests
There are two different env i.e regression and chtest and different conf files are there regression.conf.js and chtest.conf.js
===================================================================================================================================

To run test on regression on chrome browser : npm run regression-on-chrome
To run test on regression on edge browser : npm run regression-on-edge
To run test on regression on edge and chrome parallely : npm run regression-parallel

====================================================================================================================================
To run test on chtest on chrome browser : npm run chtest-on-chrome
To run test on chtest on edge browser : npm run chtest-on-edge
To run test on chtest on edge and chrome parallely : npm run chtest-parallel

===================================================================================================================================
For Generating allure report execute below command

npm run allure