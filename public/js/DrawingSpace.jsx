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
        var drawingSpace = document.getElementById('drawingSpace');
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
            <canvas id='canvas'></canvas>
            );
    }
});

//Exports=========================================================
module.exports = DrawingSpace;
