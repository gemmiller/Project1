/**
 * @jsx React.DOM
 */

//Libraries========================================================
var React = require('react');
var fabric = require('fabric');
var $ = require('jquery');

//Components=======================================================

//DrawingSpace component
var DrawingSpace = React.createClass({
    getInitialState:function(){
        return {canvas:null};
    },
    renderItems:function(items){
        var i = 0;
        for(i=0;i < items.length;i++){
            if(items[i]);
            this.state.canvas.add(items[i]);
        }
        this.state.canvas.renderAll();
    },
    componentDidMount: function(){
        //Set up Canvas
        var canvas = new fabric.Canvas('canvas');
        var drawingSpace = document.getElementById('drawingUtility');
        var width = drawingSpace.clientWidth; 
        var height = window.screen.height;
        canvas.setHeight(height);
        canvas.setWidth(width);

        //Set state with canvas
        this.setState({canvas:canvas});
    },
    componentDidUpdate(){

        if(this.props.drawingState==='line')
            this.state.canvas.isDrawingMode = true;
        if(this.props.drawingState==='cursor')
            this.state.canvas.isDrawingMode = false;

        if(!this.props.items)
            return;

        this.renderItems(this.props.items);
    },
    render: function(){
                return(
                    <div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
                        <canvas id='canvas'></canvas>
                    </div>
            );
    }
});

//Exports=========================================================
module.exports = DrawingSpace;
