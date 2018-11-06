const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/:id', (req, res) => {
  const number = req.params.id;
  res.redirect(`http://localhost:3001/grub-reactor/${number}/`);
});

// app.get('', (req, res) => {
//   const {number} = req.params;
//   res.redirect(``);
// });
// app.get('', (req, res) => {
//   const {number} = req.params;
//   res.redirect(``);
// });


// app.get('', (req, res) => {
//   const {number} = req.params;
//   res.redirect(``);
// });
// app.get('', (req, res) => {
//   const {number} = req.params;
//   res.redirect(``);
//});





app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});