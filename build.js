const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;
let html = fs.readFileSync('Index.html', 'utf8');

// Replace the empty key with the actual one
html = html.replace(
  'const GEMINI_API_KEY = "AQ.Ab8RN6LCOWu_5L7KJec3SAMKXep-ipDntngf6HkhH2BayB_Ffw";',
  `const GEMINI_API_KEY = "${apiKey}";`
);

fs.writeFileSync('Index.html', html);
