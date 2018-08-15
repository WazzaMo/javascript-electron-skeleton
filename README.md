# Vue JavaScript Electron Skeleton

## Purpose
This project is a base project used in Monash Masters of Interaction IoT topic in MDC5210.

## How to Use
The source code is kept in the `src/` directory.
This project just uses NPM to build and develop.

### Build & Dev Commands

| Command | Action |
|---------|--------|
| `npm start` | Will generate the HTML and do live-watch on source files with electron. |
| `npm dist`  | Will build the electron application. |

### Directories

| Directory | Content      |
|-----------|--------------|
| app/      | Built code - do not edit. |
| dist/     | Redistributable electron package. |
| src/      | Source code - put your stuff here. |
| src/renderer | Web UI code. |
| src/main | Node bootstrap and I/O code. |

## Credits
### Thanks
This project is based on the package.json from 
[electron-vue-parcel-boilerplate by Shamofu](https://github.com/shamofu/electron-vue-parcel-boilerplate)

### Changes
This project is different and slightly simpler than the original boilerplate project:
- Uses JavaScript instead of TypeScript (not a complaint about TS)
- Doesn't have any of the test steps that Shamofu included
- Simplifies the build approach by separating src from app and resolved (what seemed to be) an issue in the dist build resulting in a blank electron screen.

