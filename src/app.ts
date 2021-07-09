import * as React from 'react'

/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false })

/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as ReactNativeScript from 'react-nativescript'
import App from './screens/App';

ReactNativeScript.start(React.createElement(App, {}, null))

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
