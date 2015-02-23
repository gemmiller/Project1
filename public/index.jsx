/**
 * @jsx React.DOM
 */

//Styles==================================================
require('./css/dashboard.css');

//Libaries================================================
var React = require('react');

//Components==============================================
var Navbar = require('./js/Navbar.jsx');
var DrawingUtility = require('./js/DrawingUtility.jsx');

//Data====================================================
var navlinks = require('./data/navlinks.js');

//Render Components=======================================

//Render Navbar
React.render(<Navbar navData={navlinks} projectName='My First Drawing'/>, document.getElementById('navbar'));

//Render DrawingUtility
React.render(<DrawingUtility/>,document.getElementById('drawingUtility'));


