import { h } from 'preact';
import style from './style';

import {
	Charts,
	ChartContainer,
	ChartRow,
	YAxis,
	LineChart
  } from "react-timeseries-charts";
  
import { TimeSeries, TimeRange } from "pondjs";

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
