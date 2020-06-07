var chart;
var dayselected;
var dateselected;
var yearselected;
var monthselected;
var effortdatadetailstooltip;


$(document).ready(function(){
     tooltip();
})

function getYear(){    
}

function getMonth(){
    
}

function getWeek(){
    
}

function getDay(){
    
}

function generateCharts(){
    chart=c3.generate({
        bindto:'#effortchart',
        data:{
            columns:[
                ['Incident', 1],
                ['Bug Fixing', 3],
                ['Test Cases', 2],
                ['KT', 1],
                ['Development', 6]
            ],
            color:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            type:'donut',
        },
        donut: {
            title: "EFFORT UTILIZATION",
        }
    });
}

function tooltip(){
    tippy('.datecontainer tbody tr td div', {
        arrow:'left',
        trigger: 'click',
        theme: 'honeybee',
        placement: 'right',     
        html: '#myTemplate',
        onShown(){
            generateCharts();
        }
    })  
}

