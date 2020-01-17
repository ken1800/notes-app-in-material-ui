import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import { Link } from "react-router-dom";
import { parseDate } from "../../redux/actions/Utils";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  }
});

function NotesCard(props) {
  const classes = useStyles();

  return (
    <Card
      key={props.id}
      className={classes.card}
      style={{
        border: "none",
        borderBottom: "1px double #e2e2e2",
        borderRadius: "0"
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ marginBottom: "-1px" }}
        >
          {props.title}{" "}
        </Typography>
        <Typography color="textSecondary" style={{ fontSize: "12px" }}>
          By, Ankit Brijwasi on {parseDate(props.created_on)}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          component="p"
          style={{ marginTop: "10px" }}
        >
          {props.body}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "-0.8em" }}>
        <Button size="small" color="primary">
          bookmark &nbsp;
          <FavoriteBorderSharpIcon style={{ fontSize: "18px" }} />
        </Button>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/${props.id}`}
        >
          read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default NotesCard;
