const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['GET', 'POST'] }));

app.use('/', pageRoute);
app.use('/courses', courseRoute);

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
  });