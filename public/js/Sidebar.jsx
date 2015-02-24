/**
 * @jsx React.DOM
 */

//Libaries
var React = require('react');
var fabric = require('fabric');

var SidebarSection = React.createClass({
    addSquare:function(e){
        e.preventDefault();
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 75,
            height: 75
        });
        this.props.addItem(rect);
    },
    render:function(){
        var self = this;
        var listItems = this.props.listItems.map(function(item){
            return(
                <li><a href={item.link} onClick={self.addSquare}>{item.displayName}</a></li>
            );
        });

       return(
           <ul className="nav nav-sidebar">
                {listItems}
           </ul>
       );
    }
});

var Sidebar = React.createClass({
    render:function(){
        var self = this;
        var sections = this.props.sections.map(function(section){
                return(
                        <SidebarSection addItem={self.props.addItem} listItems={section} />
                    );
        });

       return(

            <div id="sidebar" className="col-sm-3 col-md-2 sidebar">
                {sections}
           </div>
       );
    }
});

module.exports = Sidebar;
