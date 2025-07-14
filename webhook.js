const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  console.log(" Incoming request:", req.method, req.url);

  if (req.method === 'POST' && req.url === '/webhook') {
    console.log(" Webhook triggered. Deploying...");

    exec('cmd.exe /c scripts\\start.cmd', (err, stdout, stderr) => {
      if (err) {
        console.error(" Deployment error:", err.message);
        console.error(" Full error object:", err);
        console.error(" STDERR:\n", stderr);
        res.writeHead(500);
        return res.end(" Deployment failed. See terminal logs.");
      }

      console.log(" STDOUT:\n", stdout);
      console.log(" STDERR (if any):\n", stderr);
      res.writeHead(200);
      res.end(" Deployment complete!");
    });
  } else {
    res.writeHead(200);
    res.end(" Webhook server is running...");
  }
});

server.listen(3001, () => {
  console.log(" Webhook server listening on port 3001");
});
