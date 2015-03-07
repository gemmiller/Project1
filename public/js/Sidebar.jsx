/**
 * @jsx React.DOM
 */

//Libaries
var React = require('react');
var fabric = require('fabric');

var SidebarSection = React.createClass({
    getInitialState:function(){
        return {active:'cursor'};
    },
    changeState:function(state){
        this.props.changeDrawingState(state);
        this.setState({active:state});
    },
    render:function(){
        var self = this;
        var listItems = this.props.listItems.map(function(item){
            return(
                <li className ={self.state.active === item.state?'active':''}><a href={item.link} onClick={self.changeState.bind(self,item.state)}>{item.displayName}</a></li>
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
                        <SidebarSection changeDrawingState={self.props.changeDrawingState} listItems={section} />
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
