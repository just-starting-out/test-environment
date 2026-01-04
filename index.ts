function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generatePage() {
  await delay(10);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>Welcome to this page</h2>
  </body>
</html>`;
}

export { generatePage };
