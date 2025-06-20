# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Documentation

- Correct import syntax for SvelteLastFMViewer in README.md

### Refactor

- Update export syntax for SvelteLastFMViewer component to use default export

## [5.0.0] - 2025-06-15

### Bug Fixes

- Removed tailwind content config to avoid generating extra styles during dev

### Documentation

- Update README to include @lastfm-viewer/utils in installation instructions
- Update README to reflect changes in package import and remove caution note about updateInterval

### Features

- Add validation for updateInterval in useLfmv hook

### Miscellaneous Tasks

- Move @iconify/svelte to devDependencies in package.json

### Performance

- Optimize Svelte build to skip SvelteKit server build

### Refactor

- Enhance type definitions for Icon component in SvelteLastFMViewer
- Update ErrorView component to accept Error object instead of message string

### Ui

- Fix wrong size for album cover size skeleton when loading

### Update

- V5.0.0

## [4.0.1] - 2025-06-11

### Documentation

- Update README to remove api_key references from SvelteLastFmViewer usage

### Update

- V4.0.1

## [4.0.0] - 2025-06-11

### Refactor

- Removed api_key parameter from useLfmv and SvelteLastFmViewer components
- Change intervalRef type to ReturnType<typeof setInterval> in stores and SvelteLastFMViewer components

### Update

- V4.0.0

## [3.0.3] - 2025-06-04

### Update

- V3.0.3

## [3.0.2] - 2025-06-04

### Update

- V3.0.2

## [3.0.1] - 2025-06-03

### Update

- V3.0.1

## [3.0.0] - 2025-06-03

### Documentation

- Updated readme to reflect recent style importing changes in 7a35481

### Breaking

- Transfered scoping to postcss-scope plugin and removed css modules

### Update

- V3.0.0

## [2.0.5] - 2025-06-03

### Dev

- Served a dummy json file to avoid a 404 in chrome development

### Ui

- Adapting colors based on prefered color scheme (dark&light)
- Fixed a scoping issue that causes tailwind v3 styles to clash with v4

### Update

- V2.0.4
- V2.0.5

## [2.0.4] - 2024-09-08

### Ui

- Replaced default album cover with an icon
- Replaced drop-shadow in ablum cover with a drop-shadow
- Fixed card footer component layout and changed user icon styles

### Update

- V2.0.4

## [2.0.3] - 2024-07-15

### Update

- V2.0.3

## [2.0.2] - 2024-06-19

### Update

- V2.0.2

## [2.0.1] - 2024-06-19

### Bug Fixes

- Wrong path for test svelte component

### Documentation

- Added svg as a divider instead of html div

### Build

- Upgraded packages

### Update

- V2.0.0
- V2.0.0
- V2.0.1

## [2.0.0] - 2024-02-08

### Bug Fixes

- Added the mode prop for handling errors in error view

### Documentation

- Added better documentation for usage

### Styling

- Added primary color as a style in lfmv component
- Wrapped figure and track info inside a div for a better looking layout

### Dev

- Added a test component to test for built library

### Update

- V2.0.0

## [1.3.8] - 2024-02-03

### Update

- V1.3.8

## [1.3.7] - 2024-01-29

### Bug Fixes

- Removed relative color in pasttracks title background
- Skeleton not shown for pasttracks

### Documentation

- Added project logo and homepage

### Update

- V1.3.7

## [1.3.6] - 2024-01-25

### Styling

- Changed font sizing to adapt to any page styles

### Update

- V1.3.6

## [1.3.5] - 2024-01-19

### Bug Fixes

- Converted all http links to https

### Update

- V1.3.5

## [1.3.4] - 2024-01-15

### Bug Fixes

- Tailwind glob pattern now include imported components from the library

### Update

- V1.3.4

## [1.3.3] - 2024-01-14

### Miscellaneous Tasks

- Install needed packages as peer dependencies

### Update

- V1.3.3

## [1.3.2] - 2024-01-14

### Bug Fixes

- Fixed some of daisyui themes are applied to the whole page

### Update

- V1.3.2

## [1.3.1] - 2024-01-14

### Miscellaneous Tasks

- Added proper file exports to package.json

### Update

- V1.3.0
- V1.3.1

## [1.3.0] - 2024-01-14

### Documentation

- Modified package git repo url

### Miscellaneous Tasks

- Updated dependencies

### Dev

- Upgraded to svetekit 2.0.0

### Update

- V1.3.0

## [1.2.7] - 2024-01-12

### Documentation

- Updated the README to include the recent changes and project setup

### Miscellaneous Tasks

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies

### Update

- V1.2.7

## [1.2.1] - 2024-01-08

### Bug Fixes

- Illogical check for error messages

### Refactor

- Scoped daisyui styles to avoid unwanted conflicts

### Update

- V1.2.1

## [1.2.0] - 2024-01-08

### Bug Fixes

- Unexpected "undefined" value in Album title

### Refactor

- Used a simpler array method to display past tracks

### Styling

- Changed album cover shadow to hsla color for better browser compatibility

### Dev

- Unused import

### Update

- V1.2.0

## [1.1.5] - 2024-01-04

### Update

- V1.1.5

## [1.1.4] - 2024-01-04

### Dev

- Moved all utility functions and types to the util package
- Renamed monorepo to @lastfm-viewer

### Update

- V1.1.4

## [1.1.3.1] - 2024-01-03

### Dev

- Removed unnecesary prepublishOnly script

## [1.1.3] - 2024-01-03

### Dev

- Changed publish folder to be ./package

### Update

- V1.1.2
- V1.1.3

## [1.1.2] - 2024-01-03

### Bug Fixes

- UpdateInterval prop is now optional

### Miscellaneous Tasks

- Changed import order

### Styling

- Modified shadow color for album cover
- Modified background color for past tracks title

### Dev

- Style changes in dev server

### Update

- V1.1.1
- V1.1.2

## [1.1.1] - 2024-01-02

### Update

- V1.1.1

## [1.1.0] - 2024-01-02

### Bug Fixes

- Undefined type

### Miscellaneous Tasks

- Renamed package

### Dev

- Import eslint config

### Update

- V1.1.0

## [1.0.2] - 2024-01-02

### Bug Fixes

- Fixed imported version from package.json can't be accessed

### Documentation

- Added images to README
- Added license, author, homepage in package.json

### Dev

- Added test for built package
- Added turbo folder to gitignore
- Migrated project to the main monorepo

### Update

- V1.0.1 (hot fix)
- V1.0.2

<!-- generated by git-cliff -->
