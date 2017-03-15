'use strict'
const bookmarkify = require('.')

const html = bookmarkify('./fixture.js', 'alert')

const expected = '<a href="javascript:%21%28function%28%29%7B%5Bobject%20Object%5D%7D%29%28%29">alert</a>'

if (html !== expected) {
    throw new Error(`didn't work, expected ${expected} but got ${html}`)
}

console.log('ok')

