# CV Site

This repo is for the CV Landing Page

## Technologies
* Hugo Static Site Generator [https://gohugo.io](https://gohugo.io)

## Dependencies

### Install Hugo

## Start the Local Server
./hugo server --buildDrafts

Or

./hugo server -D
Go to localhost:1313

## Build to public folder and ignore cache
hugo server --disableFastRender --destination public --ignoreCache

## Minify all filetypes and Build for Production (minification build process after 10/20/17)
npm run build

## Build for Production using Hugo (no minification)
./hugo -d build -D -E -F 