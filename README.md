# typescript-dom-crash-course
A Typescript Document Object Model (DOM) Crash Course

The code in this repository is based on the following four part video tutorial which goes through a [Javascript DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc). The only difference is here I decide to follow through using typescript instead.

## Running the code

Each individual part is treated as a separate `node` project. To execute the code in the `src` directory do the following:

1. Navigate to the root-level folder of a part containing a `package.json` file.
2. Run ```npm install``` to install the development dependencies. There are only two: the `typescript` compiler and `lite-server`. Both will be installed locally when you execute this command.
3. From a terminal either run ```npx tsc -w``` or ```node_modules/.bin/tsc -w``` to automatically watch for and compile changes in multiple typescript files in the project.
4. From a separate terminal run ```npx lite-server``` or ```npm run dev``` to launch the development server in your browser.
