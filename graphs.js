var confirmed = {
    chart: {
        background: '#b3e0ff',
        height: 800,
        width: 1200,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      
      colors: ['#cc0000', '#0066ff','#006600','#b3b300'], //canada, usa, italy, china
      dataLabels: {
        enabled: false,
      },

    stroke: {
        curve:'straight'
    },

    markers: {
        size: 2,
    },
    title: {
        text: 'Confirmed Cases',
        align: 'center'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
    xaxis: {
        categories: ['Jan22','Jan23','Jan24','Jan25','Jan26','Jan27','Jan28','Jan29','Jan30','Jan31','Feb01','Feb02','Feb03','Feb04','Feb05','Feb06','Feb07','Feb08','Feb09','Feb10','Feb11','Feb12','Feb13','Feb14','Feb15','Feb16','Feb17','Feb18','Feb19','Feb20','Feb21','Feb22','Feb23','Feb24','Feb25','Feb26','Feb27','Feb28','Feb29','Mar01','Mar02','Mar03','Mar04','Mar05','Mar06','Mar07','Mar08','Mar09','Mar10','Mar11','Mar12','Mar13','Mar14','Mar15','Mar16','Mar17','Mar18','Mar19','Mar20','Mar21','Mar22','Mar23','Mar24','Mar25','Mar26','Mar27','Mar28','Mar29','Mar30','Mar31','Apr01','Apr02','Apr03','Apr04','Apr05','Apr06','Apr07','Apr08','Apr09','Apr10','Apr11','Apr12','Apr13'],
        tickAmount: 20,
        title: {
            text: "DATE",
            style: {
                fontSize: '20px',
            },
        },
    },
    
    yaxis: {
        logarithmic: true,
        min: 1,
        max: 700000,
        tickAmount: 10,
        title: {
            text: "CONFIRMED",
            style: {
                fontSize: '20px',
            },
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      },

    series: [
    {
        name: 'Canada',
        data: [null,null,null,null,1,1,2,2,2,4,4,4,4,4,5,5,7,7,7,7,7,7,7,7,7,7,8,8,8,8,9,9,9,10,11,11,13,14,20,24,27,30,33,37,49,54,64,77,79,108,117,193,198,252,415,478,657,800,943,1277,1469,2088,2790,3251,4042,4682,5563,6267,7385,8514,9547,11271,12424,12965,15743,16550,17859,19128,20641,22046,23303,null,null,null,null]
    },
    {
        name: 'USA',
        data: [1,1,2,2,5,5,5,5,5,7,8,8,11,11,11,11,11,11,11,11,12,12,13,13,13,13,13,13,13,13,15,15,15,51,51,57,58,60,68,74,98,118,149,217,262,402,518,583,959,1281,1663,2179,2727,3499,4632,6421,7783,13677,19100,25489,33276,43847,53740,65778,83836,101657,121478,140886,161807,188172,213372,243453,275586,308850,337072,366667,396223,429052,461437,496535,526396,555313,580619,null,null]
    },
    {
        name: 'Italy',
        data: [null,null,null,null,null,null,null,null,null,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,20,62,155,229,322,453,655,888,1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589,86498,92472,97689,101739,105792,110574,115242,119827,124632,128948,132547,135586,139422,143626,147577,152271,156363,159516]
    },
    {
        name: 'China',
        data: [548,643,920,1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156,81250,81305,81435,81498,81591,81661,81782,81897,81999,82122,82198,82279,82361,82432,82511,82543,82602,82665,82718,null,null,null,null]
    },
],

  };
  
  var confirmedchart = new ApexCharts(document.querySelector("#chart"), confirmed);
  confirmedchart.render();

  
  //DEATHS
  var deaths = {
    chart: {
        background: '#b3e0ff',
        height: 800,
        width: 1200,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      
      colors: ['#cc0000', '#0066ff','#006600','#b3b300'], //canada, usa, italy, china
      dataLabels: {
        enabled: false,
      },

    stroke: {
        curve:'straight'
    },

    markers: {
        size: 2,
    },
    title: {
        text: 'Confirmed Cases',
        align: 'center'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
    xaxis: {
        categories: ['Jan22','Jan23','Jan24','Jan25','Jan26','Jan27','Jan28','Jan29','Jan30','Jan31','Feb01','Feb02','Feb03','Feb04','Feb05','Feb06','Feb07','Feb08','Feb09','Feb10','Feb11','Feb12','Feb13','Feb14','Feb15','Feb16','Feb17','Feb18','Feb19','Feb20','Feb21','Feb22','Feb23','Feb24','Feb25','Feb26','Feb27','Feb28','Feb29','Mar01','Mar02','Mar03','Mar04','Mar05','Mar06','Mar07','Mar08','Mar09','Mar10','Mar11','Mar12','Mar13','Mar14','Mar15','Mar16','Mar17','Mar18','Mar19','Mar20','Mar21','Mar22','Mar23','Mar24','Mar25','Mar26','Mar27','Mar28','Mar29','Mar30','Mar31','Apr01','Apr02','Apr03','Apr04','Apr05','Apr06','Apr07','Apr08','Apr09','Apr10','Apr11'],
        tickAmount: 20,
        title: {
            text: "DATE",
            style: {
                fontSize: '20px',
            },
        },
    },
    
    yaxis: {
        logarithmic: true,
        min: 1,
        max: 600000,
        tickAmount: 10,
        title: {
            text: "CONFIRMED",
            style: {
                fontSize: '20px',
            },
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      },

    series: [
    {
        name: 'Canada',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,1,1,1,1,4,5,8,9,12,19,21,25,26,30,38,54,61,64,80,101,109,138,178,217,258,338,374,406,502,556,653]
    },
    {
        name: 'USA',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,6,7,11,12,14,17,21,22,28,36,40,47,54,63,85,108,118,200,244,307,417,557,706,942,1209,1581,2026,2467,2978,3873,4757,5926,7087,8407,9619,10783,12722,14695,16478,18586,20463]
    },
    {
        name: 'Italy',
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,2,3,7,10,12,17,21,29,34,52,79,107,148,197,233,366,463,631,827,827,1266,1441,1809,2158,2503,2978,3405,4032,4825,5476,6077,6820,7503,8215,9134,10023,10779,11591,12428,13155,13915,14681,15362,15887,16523,17127,null,null,null,null]
    },
    {
        name: 'China',
        data: [17,18,26,42,56,82,131,133,171,213,259,361,425,491,563,633,718,805,905,1012,1112,1117,1369,1521,1663,1766,1864,2003,2116,2238,2238,2443,2445,2595,2665,2717,2746,2790,2837,2872,2914,2947,2983,3015,3044,3072,3100,3123,3139,3161,3172,3180,3193,3203,3217,3230,3241,3249,3253,3259,3274,3274,3281,3285,3291,3296,3299,3304,3308,3309,3316,3322,3326,3330,3333,3335,3335,null,null,null,null]
    },
],

  }
  
  var deathschart = new ApexCharts(document.querySelector("#chart2"), deaths);
  
  
  deathschart.render();