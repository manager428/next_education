const fs = require('fs')

;

(() => {
  const robots = `User-agent: * \nDisallow: /`

  fs.writeFileSync('public/robots.txt', robots)
  console.log('robots.txt written to public/robots.txt')
})()
