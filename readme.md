# Having fun with TypeScript
This repo have a few demo files to go along the presentation with fun things you can do with TypeScript.

# Setup
Just run `yarn` in the root folder.

# Running the files
This project has been tailored to highlight the output when the files are executed and to easily expose a way to execute the files.
You can use the command:
```
yarn start {FILE_NUMBER_PREFIX}
```
Where `{FILE_NUMBER_PREFIX}` is the prefix for the file you want to run from the `src\presentation` folder. The number must match the prefix, so if you want to execute the file `01-duck-typing.ts` you should run `yarn start 01`, with the leading `0`.
Alternatively, you can use the filename with the extension to run it, like `yarn start 01-duck-typing.ts`.