import React from 'react';
import * as d3 from 'd3';

export const initSpeedometer = () => {

    // const arcRef = firebase.database().ref();
    // const arcWheel = arcRef.child('Wheel1');
    // const currentArc = arcWheel.child('Current');

    const dims = { height: 300, width: 300, radius: 138 };
    const cent = { x: (dims.width / 2), y: (dims.height / 2)};

    const arcCanvas = d3.select('.canvas')
    const svg2 = arcCanvas.append('svg')
        .attr('class', 'arc-background')
        .attr('width', dims.height)
        .attr('height', dims.width);

    const arcGroup = svg2.append('g')
        .attr('class', 'arc-group')
        .attr("transform", `translate(${cent.x},${cent.x})`);

    // https://github.com/d3/d3-scale-chromatic
    // var color = d3.scaleOrdinal(d3.schemePastel1)
    // .domain(keys);
    const color = d3.scaleOrdinal()
        .range(['red', 'blue', 'orange']);

    var p = Math.PI * 2;
        
    const pieGenerator = d3.pie()
        .startAngle(p + 2.4)
        .endAngle(3.87)
        .sort(null);
        
    let pieData = [10, 90];

    const arcGenerator = d3.arc()
        .innerRadius(dims.radius - 27)
        .outerRadius(dims.radius);

    const updatePieData = (speed) => {
        const maxSpeed = (speed <= 100) ? speed : 100;
        const currentSpeed = [];
        currentSpeed.push(100 - maxSpeed);
        currentSpeed.push(speed);
        console.log('currentSpeed', currentSpeed);
        return currentSpeed;
    }

    let blue_gradient = arcGroup.append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

    blue_gradient.append("svg:stop")
        .attr("offset", "50%")
        .attr("stop-color", "#0cbdfe")
        .attr("stop-opacity", 1);

    blue_gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#1a9edd")
        .attr("stop-opacity", 1);

    const updateArc = (pieData) => {
        const arcData = pieGenerator(pieData);
        const arcs = arcGroup.selectAll('path')
            .data(arcData);
            
        console.log('arcs', arcs);
        arcs.exit().remove()

        arcs.attr('d', arcGenerator)
            .transition().duration(250)
            .attrTween('d', arcTweenUpdate);
        
        arcs.enter()
            .append('path')
            .attr('class', 'arc-path')
            .attr('d', arcGenerator)
            .each(function(d) { this._current = d})
            .style('fill', "url('#gradient')")
            .transition().duration(750)
                .attrTween('d', arcTweenEnter);
    }

    // arcWheel.on('value', snap => {
    //     pieData = updatePieData(snap.val().Current.CurrentRPM);

    //     const readout = document.getElementById('db-readout');
    //     readout.innerText = JSON.stringify(snap.val().Current.CurrentRPM, null, 3);

    //     updateArc(pieData);
    // });


    const arcTweenEnter = (d) => {
        // endAngle should be end angle of old wedge
        // start angle should be the new start pooint
        console.log('artTweenEnter', d);
        var i = d3.interpolate(d.endAngle, d.startAngle);

        return function(t) {
            d.startAngle = i(t);
            return arcGenerator(d);
        }
    }

        // this._current = the current state of the arc on the page 
        // d = the latest updated data from the DB
    function arcTweenUpdate (d) {
        
        console.log('arcTweenUpdate', this._current, d)
        // var i = d3.interpolate(this._current.endAngle, d.startAngle)
        var i = d3.interpolate(this._current, d)
        // update the current prop with new updated data
        
        console.log('interpolation', d);
        this._current = i(1); // d
        return function(t) {
            return arcGenerator(i(t));
        }

    }
}

export default initSpeedometer;
