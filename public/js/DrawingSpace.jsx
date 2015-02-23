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
    componentDidMount: function(){
        //Create a rectangle
        var canvas = new fabric.Canvas('canvas');
        var drawingSpace = document.getElementById('drawingUtility');
        var width = drawingSpace.clientWidth; 
        var height = window.screen.height;
        canvas.setHeight(height);
        canvas.setWidth(width);
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });
        canvas.add(rect);
        canvas.renderAll();
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
