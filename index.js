#! /usr/bin/env node
'use strict'
const minify = require('minify')

const file = process.argv[2]
const label = process.argv[3]

minify(file, (err, rawJS) => {
    if (err) {
        throw err
    }
    const wrappedJS = `!(function(){${rawJS}})()`
    const href = `javascript:${escape(wrappedJS)}`
    const html = `<a href="${href}">${label}</a>`
    console.log(html)
})

