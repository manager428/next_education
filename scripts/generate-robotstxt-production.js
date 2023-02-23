const fs = require('fs')

;

(() => {
  const robots = `User-agent: * \nAllow: /`

  fs.writeFileSync('public/robots.txt', robots)
  console.log('robots.txt written to public/robots.txt')
})()
