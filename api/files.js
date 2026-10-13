// api/files.js - Lista os PDFs disponíveis na pasta downloads

const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const downloadsDir = path.join(__dirname, '..', 'downloads');
    
    if (!fs.existsSync(downloadsDir)) {
      return res.status(200).json({ files: [] });
    }

    const files = fs.readdirSync(downloadsDir)
      .filter(f => f.endsWith('.pdf'))
      .map(f => {
        const stat = fs.statSync(path.join(downloadsDir, f));
        return {
          name: f,
          size: stat.size,
          modified: stat.mtime.toISOString(),
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return res.status(200).json({ files, count: files.length });
  } catch (err) {
    console.error('files API error:', err);
    return res.status(500).json({ error: err.message });
  }
};
