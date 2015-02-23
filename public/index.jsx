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
var navbarMount = document.getElementById('navbar');
if(navbarMount)
 React.render(<Navbar navData={navlinks} projectName='My First Drawing'/>, navbarMount);

//Render DrawingUtility
var drawingUtilityMount = document.getElementById('drawingUtility');
if(drawingUtilityMount)
    React.render(<DrawingUtility/>,drawingUtilityMount);


