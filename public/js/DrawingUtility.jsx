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
        return {items:[]}
    },
    addItem:function(item){
       var items = this.state.items;
       items.push(item);
       this.setState({items: items});
    },
    render:function(){
        return(
                <div className='row'>
                    <DrawingSpace items={this.state.items}/>
                    <Sidebar addItem={this.addItem} sections={sections}/>
                </div>
            );
    }
});

//Exports============================================
module.exports = DrawingUtility;

