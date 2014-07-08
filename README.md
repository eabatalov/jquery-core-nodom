jquery-nodom
===============

Implementation of jQuery core (subset for now) for running in CocoonJS Javascript runtime
and other runtimes with no natural DOM support such as nodejs.

This project is on a very initial stage. Implemented subset is very small. It even has no unit tests yet.

On the other hand this subset is used in HTML5 game engine for quests. So if your codebase depends on jQuery and you are not planing to stop using its very essential features then you can use this project as a point to start.

Project license allows to do anything with it, but don't forget to contribute back.

### NodeJS:
Add jquery-nodom to your npm dependencies:
```json
    "dependencies" : { 
        "jquery-core-nodom" : "git+ssh://git@github.com:eabatalov/jquery-nodom.git"
    }, 
```
Use jQuery from your nodejs code
```javascript
jQuery = require('jquery-core-nodom/');
```

### Other runtimes:
Clone repository to your file system:
```bash
git clone git@github.com:eabatalov/jquery-nodom.git
```
Include jquery.nodom.js file to your project source file before other code. The way you include depends on the way your runtime loads scripts.

Use $ or jQuery object in your code.


Happy coding!
