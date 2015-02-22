/**
 * @jsx React.DOM
 */
var React = require('react');

var SidebarSection = React.createClass({
    render:function(){
        var listItems = this.props.listItems.map(function(item){
            return(
                <li><a href={item.href}>{item.displayName}</a></li>
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
        var sections = this.props.sections.map(function(section){
                return(
                        <SidebarSection listItems={section} />
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
