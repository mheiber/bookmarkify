#! /usr/bin/env node
'use strict'
const minify = require('minify')

const file = process.argv[2]
const label = process.argv[3]

minify(file, (err, rawJS) => {
    if (err) {
        throw err
    }
    const href = `javascript:${escape(rawJS)}`
    const html = `<a href="${href}">${label}</a>`
    console.log(html)
})

