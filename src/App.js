import "./styles.css";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    textAlign: "center"
  },
  container: {
    textAlign: "center"
  },
  paper: {
    margin: "auto",
    height: 300,
    width: 200
  },
  img: {
    width: 200,
    height: 300
  },
  base: {
    marginTop: 15,
    minWidth: 320,
    maxWidth: 300,
    margin: "auto",
    backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    boxShadow: "0 4px 6px 4px rgba(255, 105, 135, 0.3)",
    color: "white",
    minHeight: 200
  },
  title: {
    fontSize: 27,
    fontFamily: "Papyrus",
    fontWeight: "bold"
  },
  info: {
    fontSize: 20,
    fontFamily: "Papyrus"
  },
  baze: {
    marginTop: 10,
    display: "flex",
    width: 348.5,
    margin: "auto"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <div className="name">🌺🌸Estela Mele🌺🌸</div>
      <div className="bio">18🥳 • Pisces♓️ • Introvert🙄</div>
      <div> </div>
      <div className="container">
        <Button
          className="root"
          onClick={() => {
            alert("Hello! Nice to meet you😄");
          }}
        >
          Click me!
        </Button>
      </div>

      <Card className={classes.base} variant="outlined">
        <CardContent className="container">
          <Typography className={classes.title} variant="h5" component="h2">
            Some facts about me:
          </Typography>
          <Typography className={classes.info} variant="body2" component="p">
            •I have a pet hamster - Gimi🐹
          </Typography>
          <Typography className={classes.info} variant="body2" component="p">
            •I enjoy painting/drawing🎨
          </Typography>
          <Typography className={classes.info} variant="body2" component="p">
            •I can't handle spicy food🌶️
          </Typography>
          <Typography className={classes.info} variant="body2" component="p">
            •I am a pretty fast runner🏃‍♀️
          </Typography>
          <Typography className={classes.info} variant="body2" component="p">
            •I am a night owl🦉
          </Typography>
        </CardContent>
      </Card>

      <div className="txt">My favorite song at the moment: </div>
      <Card className={classes.baze}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Black Out Days
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Phantogram
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://i1.sndcdn.com/artworks-dcNxaj3sOpRt-0-t500x500.jpg"
          title="Live from space album cover"
        />
      </Card>

      <div className={classes.root}>
        <div className="txt">My favorite horror movie is... </div>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <div className={classes.container}>
          <Fade in={checked}>
            <Paper elevation={6} className={classes.paper}>
              <img
                className={classes.img}
                src="https://images-na.ssl-images-amazon.com/images/I/71nTDjTcnbL._RI_.jpg"
              />
            </Paper>
          </Fade>
        </div>
      </div>
    </div>
  );
}
