import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  testimonial: {
    marginBottom: theme.spacing(10),
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(7),
  },
}));

const testimonials = [
  {
    id: 1,
    name: 'TRANSFORMED',
    rating: 5,
    content:
      'ImPress transformed our data analytics experience. With its seamless translation capabilities, we effortlessly migrated our Impala queries to Presto, unlocking lightning-fast performance and expanding our analytical capabilities',
  },
  {
    id: 2,
    name: 'VALUABLE',
    rating: 5,
    content:
    'We were amazed by ImPress ability to optimize and translate our complex queries. It saved us valuable time and resources, enabling us to translate Impala queries to  Presto queries, accelerating our data-driven decision-making.',
  },
  {
    id: 3,
    name: 'GAME-CHANGER',
    rating: 5,
    content:
    'ImPress exceeded our expectations and proved to be a game-changer for our data-driven organization. With this translator, we’ve witnessed a remarkable boost in performance.',
  },
];

const TestimonialPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={8} md={4} key={testimonial.id}>
            <div className={classes.testimonial}>
              <Avatar
                alt={testimonial.name}
                src={`https://www.example.com/avatars/${testimonial.id}.jpg`}
                className={classes.avatar}
              />
              <Typography variant="subtitle1" gutterBottom>
                {testimonial.name}
              </Typography>
              <Rating name="rating" value={testimonial.rating} precision={0.5} readOnly />
              <Typography variant="body2">{testimonial.content}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TestimonialPage;
