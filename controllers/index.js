// CONTROLLERS>INDEX.JS
console.log('CONTROLLERS>INDEX.JS CONTROLLERS>INDEX.JS CONTROLLERS>INDEX.JS CONTROLLERS>INDEX.JS CONTROLLERS>INDEX.JS ')
const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
