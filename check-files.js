const fs = require('fs');
const path = './src/components/Navbar/Navbar.jsx';

fs.access(path, fs.constants.F_OK, (err) => {
  console.log(`${path} ${err ? 'does not exist' : 'exists'}`);
});
