import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LineChartComponent from './LineChartComponent'
import SimpleAreaChart from './SimpleAreaChart'
import TinyBarChart from './TinyBarChart'
import SimpleBarChart from './SimpleBarChart'
import StackedBarChart from './StackedBarChart'
import SimpleScatterChart from './SimpleScatterChart'
import TwoSimplePieChart from './TwoSimplePieChart'
import PieChartComponent from './PieChartComponent'
import SimpleRadarChart from './SimpleRadarChart'
import PositiveAndNegativeBarChart from './PositiveAndNegativeBarChart'
import './App.css';

function App() {
  return (

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <LineChartComponent /> 
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'}style={{border :'1px solid gray'}}>
          <SimpleAreaChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'}style={{border :'1px solid gray'}}>
          <TinyBarChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'}style={{border :'1px solid gray'}}>
          <SimpleBarChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'}style={{border :'1px solid gray'}}>
          <StackedBarChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <PositiveAndNegativeBarChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <SimpleScatterChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <TwoSimplePieChart />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <PieChartComponent />
        </Grid>
        <Grid item xs={6} height={"400px"} width={'100%'} style={{border :'1px solid gray'}}>
          <SimpleRadarChart />
        </Grid>
      </Grid>
    </Box>

  );

}

export default App;
