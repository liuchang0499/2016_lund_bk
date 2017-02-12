import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import * as d3 from 'd3';

const styles = {

}

const BubbleChart = inject('store')(function BubbleChart (props){

  function componentDidMount(){
    console.log('Grade mount', 'd3.version', d3.version);
    // request.get('/api/brands', function(err, res){
    //   props.store.setBrands(JSON.stringify(res.body));
    // });
    //Width and height
    var w = window.innerWidth;
    var h = 660;

    //Original data
    var dataset = {
      nodes: [
        { x: w  , y: h, r: 65, url: "/", name: "中国技术服务中心" },
        { x: w/6 , y: h/4, r: 45, url: "/faq", name: "FAQ常见问题" },
        { x: w/3, y: h/2, r: 45, url: "/design", name: "设计集成" },
        { x: w/1, y: h/1, r: 45, url: "/service", name: "售后维修" },
        { x: w/6, y: h/4, r: 45, url: "/rent", name: "设备租赁" },
        { x: w/3, y: h/2, r: 45, url: "/care", name: "维护保养" },
        { x: w/1, y: h/1, r: 45, url: "/solutions", name: "行业应用" },
        { x: w/6, y: h/4, r: 45, url: "/beginnersguide", name: "新手入门" }
      ],
      edges: [
        { source: 1, target: 0, distance: h/3 },
        { source: 2, target: 0, distance: h/4 },
        { source: 3, target: 0, distance: h/5 },
        { source: 4, target: 0, distance: h/3 },
        { source: 5, target: 0, distance: h/4 },
        { source: 6, target: 0, distance: h/3 },
        { source: 7, target: 0, distance: h/4 }
      ]
    };

    //Initialize a default force layout, using the nodes and edges in dataset
    var force = d3.layout.force()
      .nodes(dataset.nodes)
      .links(dataset.edges)
      .size([w, h])
      .linkDistance(function(d){
        return d.distance;
      })
      .charge([-1000])
      .start();

    var colors = d3.scale.category10();

    //Create SVG element
    var svg = d3.select("#viewport")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

    //Create edges as lines
    var edges = svg.selectAll("line")
      .data(dataset.edges)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 2);

    //Create nodes as circles
    var nodes = svg.selectAll("circle")
      .data(dataset.nodes)
      .enter()
      .append("circle")
      .attr('r', function(d){
        return d.r ? d.r : 30;
      })
      .style("fill", function(d, i) {
        return colors(i);
      })

      .call(force.drag);

    var text = svg.selectAll('text')
      .data(dataset.nodes)
      .enter()
      .append('a')
      .attr('xlink:href', function(d) {
        return d.url;
      })
      .append('text')
      .html(function(d) {
        // console.log(d.name);
        return d.name;
      })
      .attr("text-anchor", "middle")
      .style('fill', '#FFF');


    //Every time the simulation "ticks", this will be called
    force.on("tick", function() {
      edges.attr("x1", function(d) { return d.source.x; })
         .attr("y1", function(d) { return d.source.y; })
         .attr("x2", function(d) { return d.target.x; })
         .attr("y2", function(d) { return d.target.y; });

      nodes.attr("cx", function(d) { return d.x; })
         .attr("cy", function(d) { return d.y; });

      text.attr("dx", function(d) { return d.x; })
         .attr("dy", function(d) { return d.y; });
    });
  }

  function render(){
    return (
      <_Row style={{ backgroundImage: 'url(../images/bg2.png)' }}>
        <_Col span={24}>
          <div id="viewport"/>
        </_Col>
      </_Row>
    )
  };

  return observer({
    componentDidMount,
    render
  })
});

export default BubbleChart;
