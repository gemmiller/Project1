/**
 * @jsx React.DOM
 */

//Libaries===========================================
var React = require('react');

//Data===============================================
var sections = require('../data/sidebarSections.js');

//Components=========================================
var DrawingSpace = require('./DrawingSpace.jsx');
var Sidebar = require('./Sidebar.jsx');

var DrawingUtility = React.createClass({
    render:function(){
        return(
                <div className='row'>
                    <DrawingSpace />
                    <Sidebar sections={sections}/>
                </div>
            );
    }
});

//Exports============================================
module.exports = DrawingUtility;

