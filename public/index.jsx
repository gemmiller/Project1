/**
 * @jsx React.DOM
 */

var React = require('react');
var Navbar = require('./js/Navbar.jsx');
var navlinks = require('./data/navlinks.js');
React.render(<Navbar navData={navlinks} projectName='My First Drawing'/>, document.getElementById('navbar'));

