# spectacle-codemirror

Spectacle CodeMirror is a [Spectacle](https://formidable.com/open-source/spectacle/) wrapper extension for the [react-codemirror component built by Jed Watson](https://github.com/JedWatson/react-codemirror). It includes a small amount of CSS that fixes issues with integrating with Spectacle however all the options exposed by the React component are avaliable.

## Installation
To install simply run:

``` shell
npm i spectacle-codemirror
```

Then to import the extension add the following.

``` javascript
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'spectacle-codemirror/lib/spectacle-codemirror.css';
import SpectacleCodemirror from 'spectacle-codemirror';
```

## License

Copyright (c) 2019 Jonathan Fielding. MIT Licensed.