"use strict";
//ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // window.onload event for Javascript to run after HTML
    // because this Javascript is injected into the document head
    window.addEventListener('load', () => {
      // Javascript code to execute after DOM content
 
      // full ZingChart schema can be found here:
      // https://www.zingchart.com/docs/api/json-configuration/
      const myConfig = {
        type: 'line',
        title: {
          text: 'Confirmed Cases',
          fontSize: 24,
          color: '#5d7d9a'
        },
        legend: {
          draggable: true,
        },
        plotarea: {
        marginLeft:'dynamic',
        marginRight:'dynamic',
        },
        scaleX: {
          // set scale label
          label: {
            text: 'Date'
          },
          // convert text on scale indices
        },
        scaleY: {
          // scale label with unicode character
          progression: "log",
          'log-base': 10,
          label: {
            text: 'Confirmed'
          }
        },
        plot: {
          // animation docs here:
          // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
        },
        csv: {
        url: "conf-countries.csv",
        'vertical-labels': true
            }
      };
 
      // render chart with width and height to
      // fill the parent container CSS dimensions
      zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: 600,
        width: 1000
      });
//new chart for confirmed from 100 cases
    const myConfig2 = {
      type: 'line',
      title: {
        text: 'Confirmed cases when cases reached 1000',
        fontSize: 24,
        color: '#5d7d9a'
      },
      legend: {
        draggable: true,
      },
      plotarea: {
      marginLeft:'dynamic',
      marginRight:'dynamic',
      },
      scaleX: {
        // set scale label
        label: {
          text: 'Days since 1000 cases'
        },
        // convert text on scale indices
      },
      scaleY: {
        // scale label with unicode character
        progression: "log",
        'log-base': 10,
        label: {
          text: 'Confirmed'
        }
      },
      plot: {
        // animation docs here:
        // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
      },
      csv: {
      url: "conf-1000.csv",
      'vertical-labels': true
          }
    };

    // render chart with width and height to
    // fill the parent container CSS dimensions
    zingchart.render({
      id: 'myChart2',
      data: myConfig2,
      height: 600,
      width: 1000
    });
  });
    