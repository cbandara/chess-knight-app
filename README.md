<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Chess - Knight Moves Documentation
</h1>

### Backend Info
To view the docs for the Node API that is being called by this application check out the [Chess Node API Documentation](https://github.com/cbandara/chess-knight-app)

## Challenge

  * As a user I want to see a chessboard on the screen because I want to interact with it by setting the Knight's initial position.
  * Chessboard doesn't need to be responsive
  * User should be able to select a cell by clicking/tapping on it and the cell should be highlighted
  * Highlighted cell should then be sent over to an API.
  * API should return a list of possible squares in exactly TWO moves.
  * App should then highlight all the squares returned by the API

## Project Structure

This project was built with Gatsby and React.
Here you can see the project file structure:
```
/
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
      |-- 404.js
      |-- index.js
      |-- page-2.js
    |-- /components
    |-- /styles
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
|-- package-lock.json
|-- package.json
```
The application starts at /src/pages/index.js Here you will see there are some JSX elements, an SEO component, and a Layout component. All the components can be viewed in /src/components/. You can edit these reusable components however you like or create new ones.

The standard styles that came included with the gatsby starter template are inside the /src/components/layout.css while the secondary styles I added are stored in /src/styles/index.scss . I used scss so you will need to install node-sass and gatsby-plugin-sass.

All plugins used by gatsby can be seen inside gatsby-config.js and all packages used by npm can be seen in package.json

Once you have acquainted yourself with index.js, proceed to the other screen, page-2.js. Page-2 is where the chess boad element lies. To create this chessboard I used a library called chessboard.jsx. It is similar to the popular library chessboard.js but it specially caters to React. 

To learn more about the props and basic usage of chessboard go to the [chessboard.jsx documentation](https://chessboardjsx.com/)

These are the props I'm curently using:

```
position={board.knight} 
squareStyles={board.highlights} 
draggable={false} 
showNotation={true} 
onSquareClick={onSquareClicked}
```

The initial board is blank, the board shows the notation, and when a square is clicked, the onSquareClicked event handler is fired. This event handler, places a white knight on the board as well as sets the highlighted squares supplied by the API.

Feel free to experiment and if you would like to contribute to this project, take a look at the ./CONTRIBUTING.md docs.

To learn more about the algorithm behind the API check out the [Chess Node API Documentation](https://github.com/cbandara/chess-knight-app)

## Installation Instructions
1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    git clone https://github.com/cbandara/chess-knight-app.git
    cd chess-knight-app
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
