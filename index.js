#! /usr/bin/env node
'use strict'
const minify = require('uglify-js').minify

const bookmarkify = (file, label) => {
    const minified = minify(file)
    const wrappedJS = `!(function(){${minified}})()`
    const href = `javascript:${escape(wrappedJS)}`
    const html = `<a href="${href}">${label}</a>`
    return html
}

if (require.main === module) {
    if (process.argv.length !== 4) {
        throw new Error('expected bookmarkify <file> <label>')
    }
    const file = process.argv[2]
    const label = process.argv[3]
    const html = bookmarkify(file, label)
    console.log(html)
}

module.exports = bookmarkify

