// ..>API>INDEX.JS
console.log('CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS CONTROLLERS>API>INDEX.JS ')
const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const postRoutes = require('./postRoutes');
router.use('/posts', postRoutes);

const commentRoutes = require('./commentRoutes');
router.use('/comments', commentRoutes);

// const projectRoutes = require('./projectRoutes');
// router.use('/projects', projectRoutes);

module.exports = router;
