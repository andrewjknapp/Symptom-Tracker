import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import API from '../../utils/API';
import formatDate from '../DateFormat';
import '../assets/css/Chart.css';
import '../assets/css/loader.css';

function Chart(props) {
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
      data: data,
    };
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
        if (symp.type === 'Headache') {
          headAcheSev.push(symp.severity);
        } else if (symp.type === 'Stomach Ache') {
          stomachAcheSev.push(symp.severity);
        } else if (symp.type === 'Cough') {
          coughSev.push(symp.severity);
        } else if (symp.type === 'Shortness of Breath') {
          breathSev.push(symp.severity);
        }
        return '';
      });
      return '';
    });

    return {
      headAcheSev,
      stomachAcheSev,
      coughSev,
      breathSev,
      labels,
      temperatureArr,
    };
  }

  //Gets user posts from database
  useEffect(() => {
    API.getPosts().then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);

  //Gets the severity from the symptoms in the posts
  useEffect(() => {
    if (posts.length > 0) {
      const {
        headAcheSev,
        stomachAcheSev,
        coughSev,
        breathSev,
        labels,
        temperatureArr,
      } = parsePosts(posts);

      const formattedLabels = labels.map((label) => formatDate(label));
      //console.log(formattedLabels);
      let headAche = newLine('green', headAcheSev, 'Headache');
      let stomacheAche = newLine('blue', stomachAcheSev, 'Stomache Ache');
      let cough = newLine('orange', coughSev, 'Cough');
      let breath = newLine('gray', breathSev, 'Shortness of Breath');
      let temp = newLine('blue', temperatureArr, 'Temperature');

      let dataset;
      if (chartToggle) {
        dataset = [headAche, stomacheAche, cough, breath];
      } else {
        dataset = [(dataset = temp)];
      }

      setChartData({
        labels: formattedLabels,
        datasets: dataset,
      });
    }
  }, [posts, chartToggle]);

  let graphLabel = chartToggle ? 'Symptom Severity' : 'Temperature';
  let buttonLabel = chartToggle ? 'Temperature' : 'Symptom Severity';

  return isLoading ? (
    <h2 className='text-center loading'>Loading...</h2>
  ) : (
    <div className='chartDisplay'>
      {!props.isPrinting ? (
        <button
          className='toggleButton'
          onClick={() => setChartToggle(!chartToggle)}
        >
          {buttonLabel}
        </button>
      ) : null}
      <article className='canvas-container'>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: graphLabel,
              fontFamily: 'Kanit',
              fontColor: '#090C9B',
              fontSize: 40,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
      </article>
    </div>
  );
}

export default Chart;
