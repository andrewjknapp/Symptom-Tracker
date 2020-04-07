import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import API from '../../utils/API';
import '../assets/css/Chart.css'
import "../assets/css/loader.css";

function Chart() {

  const [chartToggle, setChartToggle] = useState(true);
  const [posts, setPosts] = useState([]);
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    let coughSev = [];
    let temperatureArr = [];
    let breathSev = [];
    let labels = [];

    posts.map((post) => {

      labels.push(post.time);
      temperatureArr.push(post.temperature);

      post.symptoms.map((symp) => {

        if (symp.type === "Headache") {
          headAcheSev.push(symp.severity);

        } else if (symp.type === "Stomach Ache") {
          stomachAcheSev.push(symp.severity);

        } else if (symp.type === "Cough") {
          coughSev.push(symp.severity);

        }
        else if (symp.type === "Shortness of Breath") {
          breathSev.push(symp.severity);

        }
      })
    });

    return {
      headAcheSev, stomachAcheSev, coughSev, breathSev, labels, temperatureArr
    }
  }

  function formatDate(date) {
    const time = new Date(date);

    let dayNum = time.getDay();
    let day;
    switch (dayNum) {
      case 0: day = "Sun"; break;
      case 1: day = "Mon"; break;
      case 2: day = "Tues"; break;
      case 3: day = "Wed"; break;
      case 4: day = "Thur"; break;
      case 5: day = "Fri"; break;
      case 6: day = "Sat"; break;
      default: day = ""
    }
    let amPm = "am";
    let hour = time.getHours();
    if (hour > 12) {
      hour -= 12;
      amPm = "pm";
    }

    let minutes = time.getMinutes();

    let label = `${day} ${time.getDate()}/${time.getMonth()} ${hour}:${minutes} ${amPm}`
    return label;
  }

  //Gets user posts from database
  useEffect(() => {
    API.getPosts()
      .then(res => {
        setPosts(res.data)
        setIsLoading(false);
      })
  }, []);

  //Gets the severity from the symptoms in the posts
  useEffect(() => {
    if (posts.length > 0) {

      const { headAcheSev, stomachAcheSev, coughSev, breathSev, labels, temperatureArr } = parsePosts(posts);

      const formattedLabels = labels.map(label => formatDate(label));
      //console.log(formattedLabels);
      let headAche = newLine("green", headAcheSev, "Headache");
      let stomacheAche = newLine("blue", stomachAcheSev, "Stomache Ache");
      let cough = newLine("orange", coughSev, "Cough");
      let breath = newLine("gray", breathSev, "Shortness of Breath");
      let temp = newLine("blue", temperatureArr, "Temperature");

      let dataset;
      if (chartToggle) {
        dataset = [
          headAche,
          stomacheAche,
          cough,
          breath
        ]
      } else {
        dataset = [
          dataset = temp
        ]
      }

      setChartData({
        labels: formattedLabels,
        datasets: dataset
      })
    }
  }, [posts, chartToggle])


  let graphLabel = chartToggle ? 'Symptom Severity' : 'Temperature';
  let buttonLabel = chartToggle ? 'Temperature' : 'Symptom Severity';

  return isLoading ? <h2 className="text-center loading">Loading...</h2> : (
    <div className="chartDisplay">
      <button class='toggleButton'
        onClick={() => setChartToggle(!chartToggle)}
      >{buttonLabel}</button>
      <Line
      
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: graphLabel,
            fontFamily: 'Kanit',
          },
          legend: {
            display: true,
            position: 'right',
          }
        }}
      />
    </div>
  );
}

export default Chart;