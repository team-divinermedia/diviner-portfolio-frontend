
const https = require('https');

const ids = [
    "1Ag_ZHdEZCBoq4h_Omyxzzp7jZ8g1YEXi", // Slide 1
    "1E8aB1Eo6zpAnQtTfNEeFKBKW6Z3KrrIg", // Slide 2
    "1hetWKX0Nujy8dz_IYYzR5VZ8f5ocHtbd", // Slide 3
    "1qhnmWPmAKeSFkzat4podLPzs1xZ1HJcU"  // Slide 4
];

function checkUrl(url) {
    return new Promise((resolve) => {
        const req = https.request(url, { method: 'HEAD' }, (res) => {
            console.log(`[${res.statusCode}] [${res.headers['content-type']}] ${url}`);
            resolve();
        });
        req.on('error', (e) => {
            console.log(`[ERR] ${url}: ${e.message}`);
            resolve();
        });
        req.end();
    });
}

async function run() {
    console.log("Checking converted URLs (lh3)...");
    for (const id of ids) {
        await checkUrl(`https://lh3.googleusercontent.com/d/${id}`);
    }

    console.log("\nChecking original export URLs...");
    for (const id of ids) {
        await checkUrl(`https://drive.google.com/uc?id=${id}&export=download`);
    }
}

run();
