// ..>API>INDEX.JS
console.log('CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS ')
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
