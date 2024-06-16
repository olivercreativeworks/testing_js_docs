A project to test out jsdocs.

Use npm to add jsdocs to the project. Find installation instructions here: https://github.com/jsdoc/jsdoc

The package.json file has a script defined called "myJsdoc", which runs jsdoc. Use it like this:
npm run myJsdoc src

That will create a folder called "out", which will contain html pages based on the jsdocs of the files in your src folder. 

To view the html you can open the files in the browser. For example, if you're using Windows Subsystem for Lunux (WSL). you can run this command from within the out folder:
wslview index.html

Here is the website where you can learn more about jsdocs: https://jsdoc.app/
