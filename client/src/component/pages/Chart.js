import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import API from '../../utils/API';

  function Chart() {

    const [ posts, setPosts ] = useState([]);
    const [chartData, setChartData] = useState(
      {
        labels: ['Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Cough',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3FE744',
            borderColor: '#3FE744',
            borderWidth: 3,
            pointHoverRadius: 6,
            data: [3, 8, 5, 9, 2]
          },
          {
            label: 'Fever',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3F7CE7',
            borderColor: '#3F7CE7',
            borderWidth: 3,
            pointHoverRadius: 6,
            data: [5, 7, 6, 4, 3]
          },
          
        ]
      }
    );

    function newLine(color, data, label) {

      return {
        label: label,
        fill: false,
        lineTension: 0.5,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 3,
        pointHoverRadius: 6,
        data: data
      }
   }

    function parsePosts(posts) {

      let headAcheSev = [];
      let stomachAcheSev = [];
      let feverSev = [];
      let labels = [];

      posts.map((post) => {

        labels.push(post.time);

        post.symptoms.map(( symp ) => {

          if(symp.type === "Headache") {
            headAcheSev.push(symp.severity);

          } else if (symp.type === "Stomach Ache") {
            stomachAcheSev.push(symp.severity);

          } else if (symp.type === "Fever") {
            feverSev.push(symp.severity);

          }
        })
      });

      return {
        headAcheSev, stomachAcheSev, feverSev, labels
      }
      
    }

    function formatDate(date) {
      const time = new Date(date);
      
      let dayNum = time.getDay();
      let day;
      switch(dayNum) {
        case 0: day = "Sun"; break;
        case 1: day = "Mon"; break;
        case 2: day = "Tues"; break;
        case 3: day = "Wed"; break;
        case 4: day = "Thur"; break;
        case 5: day = "Fri"; break;
        case 6: day = "Sat"; break;
      }
      let amPm = "am";
      let hour = time.getHours();
      if (hour > 12 ) {
        hour -= 12;
        amPm = "pm";
      }

      let minutes = time.getMinutes();

      let label = `${day} ${time.getDate()}/${time.getMonth()} ${hour}:${minutes} ${amPm}`
      return label;
    }

    //Gets user posts from database
    useEffect(()=>{
      API.getPosts()
      .then(res => {
        setPosts(res.data)
      })
    },[]);

    //Gets the severity from the symptoms in the posts
    useEffect(()=> {
      if (posts.length > 0) {
        
        const {headAcheSev, stomachAcheSev, feverSev, labels} = parsePosts(posts);
        const formattedLabels = labels.map(label => formatDate(label));
        console.log(formattedLabels);
        let headAche = newLine("green", headAcheSev, "Headache");
        let stomacheAche = newLine("blue", stomachAcheSev, "Stomache Ache");
        let fever = newLine("orange", feverSev, "Fever");

        setChartData({
          labels: formattedLabels,
          datasets: [
            headAche,
            stomacheAche,
            fever
          ]
        })

      }
    }, [posts])

    
    
      return (
        <div>
          <Line
            data={chartData}
            options={{
              title:{
                display:true,
                text:'Symptom Severity',
                fontColor: '#090C9B',
                fontSize: 40
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }

  export default Chart