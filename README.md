# Visual CSS Breakpoints
A simple javascript plugin that provides a visual cues for css breakpoints.
## Description
I was having trouble keeping track of what breakpoints I was looking at when previewing projects in the browser so I decided to build this little plugin to help developers track _what_ they breakpoints they were viewing. This plugin shows the developer the current screen width, the breakpoint's name/value (set by the developer), and provides visual cues via color to inform the developer.
## Demo
See what this is all about -- [view the demo](http://drewmcc.github.io/visual-breakpoints/).
## Use
Things are pretty straightforward here:
### Adding this plugin to your project
To add Visual Breakpoints, add the following before the closing `body` tag of your project:
>`<script type="text/javascript" src="your/path/to/width-check.js"></script>`

### Adding your own breakpoints
To add your own breakpoints, simply open `width-check.js` and edit/add/remove the default breakpoints in the plugin to match what's currently set up in your stylesheets.

## When to add breakpoints
>"Start with the small screen first, then expand until it looks like shit. TIME FOR A BREAKPOINT!"
>–Stephen Hay
