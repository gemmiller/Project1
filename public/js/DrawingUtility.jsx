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
    getInitialState:function(){
        return {drawingState:'cursor'}
    },
    changeDrawingState:function(drawingState){
       this.setState({drawingState: drawingState});
    },
    render:function(){
        return(
                <div className='row'>
                    <DrawingSpace drawingState={this.state.drawingState}/>
                    <Sidebar changeDrawingState={this.changeDrawingState} sections={sections}/>
                </div>
            );
    }
});

//Exports============================================
module.exports = DrawingUtility;

