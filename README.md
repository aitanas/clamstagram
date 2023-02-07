# CLAMSTAGRAM

### A social media application to share photos of clams

#### By Aitana Shough, Anton Ch, and Alex Johnson

#### 🐚 [Description](#description)
#### 🦞 [App Mockup](#mockup)
#### 🦪 [Component Diagram](#component-diagram)
#### 🐚 [Setup / Installation](#setup--installation)
#### 🦐 [Known Bugs](#known-bugs)
#### 🦪 [License](#license)

## Technologies Used
* React
* JavaScript / JSX
* HTML / CSS
* Figma
* Babel
* Bootstrap Icons

## Description

*Clamstagram* is a mock social media application created using React. It was made during our first day of React lessons at Epicodus.

## Mockup

![Clamstagram feed mockup](/clamstagram-mockup.png)

## Component Diagram
```
App.js
├── Header.js
├── UserFeed.js
│   ├── StoryList.js
│   │   ├── Story.js
│   ├── Post.js
│   │   ├── Photo
│   │   ├── CommentList.js
│   │   │   ├── Comment.js               
├── Footer.js
```
Note:
Header & Footer are static

![Clamstagram component diagram](/component-diagram.png)

## Setup/Installation

This project may be viewed online via the corresponding [**GitHub pages site**](https://aitanas.github.io/clamstagram).

Alternatively, you may clone this project to your local machine by using the following command:
```
git clone https://github.com/aitanas/clamstagram
```

**Directions after cloning are as follows:**
1. Open the `clamstagram` directory within your CLI.
2. Install all Node packages and dependencies with the command `npm install`.
3. Package and open the project in your browser using `npm run start`.
4. Enjoy!

## Known Bugs

* App functionality is currently very limited due to static-only state being utilized.

## License

**MIT License**

Copyright (c) 2022 Aitana Shough, Anton Ch, and Alex Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
