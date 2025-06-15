import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Redirecting...</title>
        <script>
            // Get the full URL including hash
            const currentUrl = window.location.href;
            
            // Replace port 3000 with 5174
            const newUrl = currentUrl.replace(':3000', ':5174');
            
            // Redirect to the correct port
            console.log('Redirecting from:', currentUrl);
            console.log('Redirecting to:', newUrl);
            window.location.href = newUrl;
        </script>
    </head>
    <body>
        <h2>Redirecting to Mission Control...</h2>
        <p>If you're not redirected in 3 seconds, <a href="http://localhost:5174">click here</a></p>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Auth redirect server running on http://localhost:3000');
  console.log('This will redirect OAuth callbacks to http://localhost:5174');
});