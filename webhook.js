const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    console.log(" Webhook triggered. Deploying React app...");

    exec('sh ./scripts/start.sh', (err, stdout, stderr) => {
      if (err) {
        console.error(` Error: ${err.message}`);
        res.writeHead(500);
        return res.end(" Deployment failed");
      }

      console.log(stdout);
      res.writeHead(200);
      res.end(" Deployment complete");
    });
  } else {
    res.writeHead(200);
    res.end(" Webhook server is running...");
  }
});

server.listen(3001, () => {
  console.log(" Webhook server listening on port 3001");
});
