/**
 * @jsx React.DOM
 */

var React = require('react');
var NavBarSearch = React.createClass({
    render: function () {
        return(
            <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..."/>
            </form>
            );
    }
});

var Navbar = React.createClass({
    render:function(){
        var navlinks = this.props.navData.map(function (link) {
            return(
                <li><a href={link.href}>{link.displayName}</a></li>
                );
        });
        return(
            <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav navbar-right">
                 {navlinks}
             </ul>
             <NavBarSearch />
            </div>
            );
    }
});

var CollapsedNavButton = React.createClass({
    render: function(){
        return(
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
            </button>
            );
    }
});
var ProjectName = React.createClass({
    render: function(){
        return(
            <a className="navbar-brand" href="#">{this.props.projectName}</a>
            );
    }
});

var NavbarHeader = React.createClass({
    render: function(){
        return(
            <div className="navbar-header">
             <CollapsedNavButton />
             <ProjectName projectName={this.props.projectName}/>
            </div>
            );
    }
});

var NavbarContainer = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
             <div className="container-fluid">
                 <NavbarHeader projectName={this.props.projectName}/>
                 <Navbar navData={this.props.navData} />
             </div>
            </nav>
            );
    }
});

module.exports = NavbarContainer;
