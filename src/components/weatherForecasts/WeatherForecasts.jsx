import React from 'react'
import './weatherForecasts.css'

function WeatherForecasts({data}) {
return (
	<>
	{data.map((datum,idx) => 
	<section key={idx}>
		<div className="weather">
		<h2>{datum.day}</h2>
		<img src={datum.img} alt={datum.imgAlt} />
		<p><span>conditions: </span>{datum.conditions}</p>
		<p><span>time: </span>{datum.time}</p>
		</div>
	</section>)}
	</>
)
}

export default WeatherForecasts