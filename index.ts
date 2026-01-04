function generatePage () {
  for (;;) {
    if (Date.now() > new Date().getMilliseconds()) {
      break
    }
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>Welcome To this page</h2>
  </body>
</html>`
  }
}
export { generatePage }
