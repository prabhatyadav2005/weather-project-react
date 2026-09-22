import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function InfoBox(){
    const INIT_IMG = "https://static.vecteezy.com/system/resources/thumbnails/046/728/580/small/mesmerizing-patterns-created-by-a-dust-devil-as-it-gracefully-glides-across-the-desert-photo.jpg"

    let info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 24.93,
        tempMax : 34,
        humidity: 48,
        weather: "haze",
    }
    return (
        <div className="InfoBox">
            <h1>WeatherInfo- {info.weather}</h1>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color = "text.secondary" component={"span"} >
        <p>Temperatur: {info.temp}&deg;C</p>
        <p>Humidity: {info.humidity}</p>
        <p>MinTemp: {info.tempMin}</p>
        <p>Max Temp: {info.tempMax}</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like: {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
     </div>
 </div>
    );
}