## What This is For
This directory contains what you'd see after running `npx create-react-app [directory]`, to see what a basic project would look like. 

## Contents
public / - The directory you can store files in (Mainly image files, icons, metadata (index.html), svg images, robots.txt (tells bots what they can and cannot scrape from your site)). Don't use it for whatever files you want or your js/jsx files.
src / - your main development directory. Put your components, pages, and css in this directory.

When creating other files, make sure to export your function like so: 
```js
// when calling as a function 
export default function myFunction() {}
//when calling as a function variable
const myFunction = () => {}

export default myFunction;
// or 
export default myFunction = () => {}
```