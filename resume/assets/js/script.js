$("document").ready(function () {

    $("#loadingDiv").hide();
    $("#mainContent").show();

    $("#totalExp").text('Experience :' + computeExp(07, 10, 2014));

    renderFrameworkCharts();

    var isBarChartCreated = false;
    new Waypoint({
        element: document.getElementById('page2'),
        handler: function (direction) {
            if (!isBarChartCreated) {
                isBarChartCreated = true;
                createTechChart();
            }

        },
        offset: 500
    });

    var isPieChartCreated = false;
    new Waypoint({
        element: document.getElementById('page3'),
        handler: function (direction) {
            if (!isPieChartCreated) {
                isPieChartCreated = true;
                renderFrameworkCharts();
            }
        },
        offset: 500
    });

    new Waypoint({
        element: document.getElementById('page5'),
        handler: function (direction) {
            if (direction === 'up') {
                $("#headText").fadeOut(function () {
                    $(this).text("Designer . Developer")
                }).fadeIn();
            } else if (direction === 'down') {
                $("#headText").fadeOut(function () {
                    $(this).text("Saurabh Dutta")
                }).fadeIn();
            }
        }
    });



    var data = {
        labels: ['Core Java', 'Adv Java', 'DBMS/SQL', 'HTML/CSS', 'Javascript', 'Node JS', 'Android', 'RESTful WS'],
        series: [5, 4, 4, 5, 5, 3, 3, 4]
    };

    var options = {
        distributeSeries: true,
        height: 400,
        stretch: true
    };

    function getYLabel(value) {
        switch (value) {
        case 0:
            return "";
            break;
        case 1:
            return "Beginner";
            break;
        case 2:
            return "Novice";
            break;
        case 3:
            return "Intermediate";
            break;
        case 4:
            return "Advanced";
            break;
        case 5:
            return "Expert";
            break;
        default:
            return "";
            break;
        }
    }

    var responsiveOptions = [
  ['screen and (min-width: 641px)', {
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value;
                }
            },
            axisY: {
                offset: 100,
                labelInterpolationFnc: function (value) {
                    return getYLabel(value);
                }
            }
  }],
  ['screen and (max-width: 640px)', {
            reverseData: true,
            horizontalBars: true,
            axisY: {
                offset: 80,
                labelInterpolationFnc: function (value) {
                    return value;
                }
            }
  }]
];





    function renderFrameworkCharts() {
        createPieChart('framework1', 60, 'assets/img/spring.png', '6DB33F');
        createPieChart('framework2', 80, 'assets/img/hibernate.png', 'BCAE79');
        createPieChart('framework3', 55, 'assets/img/mongodb.png', '529848');
        createPieChart('framework4', 80, 'assets/img/bootstrap.png', '18093A');
        createPieChart('framework5', 40, 'assets/img/angularjs.png', 'B82934');
        createPieChart('framework6', 60, 'assets/img/reactjs.png', '00D8FF');
        createPieChart('framework7', 60, 'assets/img/firebase.png', 'FED95A');
        createPieChart('framework8', 40, 'assets/img/bluemix.png', '00AED1');
    }



    function createTechChart() {
        return new Chartist.Bar('#techProficiencyGraph.ct-chart', data, options, responsiveOptions).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 45px; opacity:0'
                });


                var chartType = data.y1 === data.y2 ? 'horizontal' : 'vertical';

                if (chartType === 'horizontal') {
                    data.element.attr({
                        style: 'stroke-width: 25px; opacity:0'
                    });
                }


                var animationDefinition = {
                    'y2': {
                        id: 'animHeight' + data.seriesIndex,
                        dur: 2000,
                        from: data.y1 + 'px',
                        to: data.y2 + 'px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        begin: "1s",
                        fill: 'freeze'

                    },
                    'x2': {
                        id: 'animWidth' + data.seriesIndex,
                        dur: 2000,
                        from: data.x1 + 'px',
                        to: data.x2 + 'px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        begin: "1s",
                        fill: 'freeze'

                    },
                    'opacity': {
                        id: 'animOpacity' + data.seriesIndex,
                        dur: 2000,
                        from: '0',
                        to: '1',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        begin: "1s",
                        fill: 'freeze'

                    }
                };
                data.element.animate(animationDefinition, false);
            }
        }).on('created', function (context) {
            context.svg.elem('line', {
                x1: context.chartRect.x1,
                y1: context.chartRect.y2 - 20,
                x2: context.chartRect.x1,
                y2: context.chartRect.y2 + context.chartRect.height(),
                fill: 'none',
                stroke: '#009688',
                'stroke-width': '4px'
            });

            context.svg.elem('line', {
                x1: context.chartRect.x1,
                y1: context.chartRect.y2 + context.chartRect.height(),
                x2: context.chartRect.x1 + context.chartRect.width(),
                y2: context.chartRect.y2 + context.chartRect.height(),
                fill: 'none',
                stroke: '#009688',
                'stroke-width': '4px'
            });
        });


    }

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item'
    });


    var timeLineVar = createTimeLine();

    $(window).resize(function () {

        if ($(window).width() <= 480) {
            refreshTimeLine(timeLineVar);
        }
        if ($(window).width() > 480) {
            refreshTimeLine(timeLineVar);
        }

    });


});

function refreshTimeLine(timeLineVar) {


    for (var i = 0; i < 6; i++) {


        var item = $('#timeline-container-basic').timelineMe('getItem', i);

        if ($(window).width() <= 480) {

            item.element
                .removeClass('timeline-me-left')
                .addClass('timeline-me-right');
            continue;
        } else {
            switch (item.position) {
            case 'left':
                item.element
                    .removeClass('timeline-me-right')
                    .addClass('timeline-me-left');
                break;
            case 'right':
                item.element
                    .removeClass('timeline-me-left')
                    .addClass('timeline-me-right');
                break;
            }

        }

    }



}

function createTimeLine() {
    var currentDate = new Date();
    return $('#timeline-container-basic').timelineMe({

        items: [
            {
                type: 'smallItem',
                label: '<span class="hidden-xs">1991</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">1991</h5><span class="text-bold text-dark">Born</span><br/><span class="text-dark-gray">6<sup>th</sup> July 1991</span>'
            },
            {
                type: 'smallItem',
                label: '<span class="hidden-xs">2007</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">2007</h5>' +
                    '<h5 class="text-bold text-primary">High School</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/kv.png" width="75" /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">Kendriya Vidhyalaya No. 3 , Bhopal</span>' +
                    '<br/>' +
                    '<span class="text-dark-gray">Central Board of Secondary Eductation</span>' +
                    '<br/>' +
                    '<span class="text-success">89.60 %</span><br/>' +
                    '</div>' +
                    '</div>'

            },
            {
                type: 'smallItem',
                label: '<span class="hidden-xs">2009</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">2009</h5>' +
                    '<h5 class="text-bold text-primary">Intermediate</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/kv.png" width="75"  /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">Kendriya Vidhyalaya No. 3 , Bhopal</span>' +
                    '<br/>' +
                    '<span class="text-dark-gray">Central Board of Secondary Eductation</span>' +
                    '<br/>' +
                    '<span class="text-success">86.60 %</span><br/>' +
                    '</div>' +
                    '</div>'
            }, {
                type: 'smallItem',
                label: '<span class="hidden-xs">2013</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">2013</h5>' +
                    '<h5 class="text-primary text-bold">Internship</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/wipro_logo.png" width="70" /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">Wipro Technologies</span>' +
                    '<br/>' +
                    '<span class="text-success">Duration : 2 Months (May 2013-July 2013)</span>' +
                    '<br/>' +
                    '<p class="text-dark-gray">Learned about Payments Methods and SWIFT Standards (MT101 and Pain.001.001.05) and developed a parser for the same. This Internship helped me to gain knowledge about Software Development Cycle and XML technologies and enhanced my Java skills.</p>' +
                    '</div>' +
                    '</div>'
            }, {
                type: 'smallItem',
                label: '<span class="hidden-xs">2014</span>',
                shortContent: '<h5 class="visible-xs-block text-primary">2014</h5>' +
                    '<h5 class="text-primary text-bold">B.Tech Computer Science &amp; Engineering</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/jk.png" width="70" /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">J.K. Institute of Applied Physics &amp; Technology</span>' +
                    '<br/>' +
                    '<span class="text-dark-gray">Department of Electronics &amp; Communication</span>' +
                    '<br/>' +
                    '<span class="text-dark-gray">University of Allahabad, Allahabad</span>' +
                    '<br/>' +
                    '<span class="text-success">76.96 % with Distinction</span>' +
                    '</div>' +
                    '</div>'
            }, {
                type: 'smallItem',
                label: '<span class="hidden-xs">2014</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">2014</h5>' +
                    '<h5 class="text-primary text-bold">Infogain India Pvt. Ltd.</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/infogain_logo.png" width="70" /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">Software Engineer</span>' +
                    '<br/>' +
                    '<span class="text-success">Exp : 1 year 2 months (Oct 2014-Dec 2015)</span>' +
                    '<br/>' +
                    '<p class="text-dark-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a euismod ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam neque nunc, varius eget felis vel, viverra congue orci. Maecenas ultricies, quam non euismod egestas, mi nisl lobortis turpis, ut ultricies urna felis ut mauris. Sed efficitur diam quis porttitor pellentesque. </p>' +
                    '</div>' +
                    '</div>'
            }, {
                type: 'smallItem',
                label: '<span class="hidden-xs">2016</span>',
                shortContent: '<h5 class="visible-xs-block text-primary text-bold">2016</h5>' +
                    '<h5 class="text-primary text-bold">Wipro Digital</h5>' +
                    '<div class="row">' +
                    '<div class="col-xs-2"><img src="assets/img/wd_logo.png" width="70" /></div>' +
                    '<div class="col-xs-10">' +
                    '<span class="text-primary">Technologist</span>' +
                    '<br/>' +
                    '<span class="text-success">Exp : ' + computeExp(04, 01, 2016) + ' (Jan 2016-Till Date)</span>' +
                    '<br/>' +
                    '<p class="text-dark-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a euismod ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam neque nunc, varius eget felis vel, viverra congue orci. Maecenas ultricies, quam non euismod egestas, mi nisl lobortis turpis, ut ultricies urna felis ut mauris. Sed efficitur diam quis porttitor pellentesque. </p>' +
                    '</div>' +
                    '</div>'
            }]
    });
}

function computeExp(date, month, year) {
    var startDate = new Date(year, month - 1, date);
    var today = new Date();

    var totalMonths = monthDiff(startDate, today);

    console.log(totalMonths);

    var years = Math.floor(totalMonths / 12);
    var months = totalMonths % 12;

    return (years > 0 ? years + ' Year' + (years > 1 ? 's ' : ' ') : '') + (months > 0 ? months + ' Month' + (months > 1 ? 's ' : ' ') : '');

}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function createPieChart(id, percentage, imageUrl, strokeColor) {

    var degree = (percentage * 360) / 100;
    var chart = new Chartist.Pie('#' + id, {
        series: [degree, 360 - degree],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 15,
        startAngle: 0,
        total: 360,
        showLabel: false,
        plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<span class=""><img class="img-responsive frameworkImage center-block" src="' + imageUrl + '" /></span>'
                }]
            })
        ]

    });

    chart.on('draw', function (data) {
        if (data.type === 'slice') {

            data.element.attr({
                'style': "stroke: #cacaca;stroke-width:12px"
            })
            var pathLength = data.element._node.getTotalLength();
            if (data.index == 0) {
                // Get the total path length in order to use for dash array animation


                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({

                    'style': "stroke-width:12px;stroke: #" + strokeColor
                });
            }

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim3' + data.index,
                    dur: 700,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.linear,
                    fill: 'freeze'
                }
            };

            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim3' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px',
                'stroke-dashoffset': -pathLength + 'px'
            });

            data.element.animate(animationDefinition, false);

        }
    });



}