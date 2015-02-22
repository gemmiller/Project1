/**
 * @jsx React.DOM
 */

//Styles==================================================
require('./css/dashboard.css');

//Libaries================================================
var React = require('react');

//Components==============================================
var Navbar = require('./js/Navbar.jsx');
var Sidebar = require('./js/Sidebar.jsx');

//Data====================================================
var navlinks = require('./data/navlinks.js');
var sections = require('./data/sidebarSections.js');

//Render Components=======================================

//Render Navbar
React.render(<Navbar navData={navlinks} projectName='My First Drawing'/>, document.getElementById('navbar'));

//Render Sidebar
React.render(<Sidebar sections={sections}/>,document.getElementById('sidebar'));


