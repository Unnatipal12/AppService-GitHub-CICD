const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Environment variable display
app.get('/environment', (req, res) => {
    const environment = process.env.ENVIRONMENT || "Not Set";

    res.send(`
        <h1>Azure App Service Deployment Slot Demo</h1>
        <h2>Environment: ${environment}</h2>
    `);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
