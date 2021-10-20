const express = require('express');
const app = express();
const path = require('path');
const dirs = (function() {
    const dirname = path.join(__dirname, '/');
    const rootDir = path.join(dirname, '../');
    
    return {
        pkg: path.join(dirname, 'pkg'),
        public: path.join(dirname, 'public')
    };
}());
const PORT = 8064;

app.use(
    express.static(dirs.public, {
        etag: false,
        maxAge: 1
    })
);

app.use(
    '/pkg',
    express.static(dirs.pkg, {
        etag: false,
        maxAge: 1
    })
);

app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
