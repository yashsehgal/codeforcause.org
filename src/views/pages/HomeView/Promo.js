import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ButtonComponent from 'src/components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '10px',
    margin: theme.spacing(6, 4, 0),
    backgroundImage: 'url("/static/images/backs/sb.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    // backgroundPositionY: 'center',
    padding: theme.spacing(10, 10, 20),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 2),
      margin: theme.spacing(6, 2, 0)
    },
    color: '#000000'
  },
  cards: {
    width: '100%',
    display: 'inline-block',
    color: '#000'
  },
  btn: {
    fontWeight: 600,
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    },
    marginLeft: '50%',
    marginTop: '8px',
    transform: 'translateX(-50%)'
  },
  grid: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  }
}));

const offers = [
  {
    name: '6 Weeks of DSA with C++',
    applied_on: 'Batch will start from 26th April',
    desc:
      'Introducing the DSA scholarship for all Coding Enthusiast, great go through of every fundamental concept while learning and implementing data strucures from scratch.',
    links: [
      {
        name: 'Know More',
        link: '/six-weeks-of-dsa-with-cpp'
      }
    ],
    terms: '',
    special_price: 'Seats are full.',
    original_price: '₹ 10,000',
    pic: '/static/images/backs/dsa.png'
  },
  {
    name: 'WhatsApp Clone',
    applied_on: '',
    desc:
      'We will build app with MERN (MongoDB ExpressJS ReactJS and Node) in hands-on packed manner. You will be on jouney of learning key steps in creating web and mobile applications.',
    links: [
      {
        name: 'Know More',
        link: '/whatsapp-clone-with-mern'
      }
    ],
    terms: '',
    special_price: '685/-',
    original_price: '₹ 3,880',
    pic: '/static/images/backs/wapp.jpg'
  }
];

function Promo({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      id="special-offers"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container>
        <Typography
          style={{
            color: '#ffffff',
            marginBottom: '16px',
            textTransform: 'capitalize',
            fontWeight: 700
          }}
          variant="h1"
          align="center"
        >
          Special Offers
        </Typography>

        <Grid container spacing={9} className={classes.grid} justify="center">
          {offers.map((item, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card key={index} raised className={classes.cards}>
                  <CardMedia image={item.pic} style={{ height: '280px' }} />
                  <Typography
                    variant="h2"
                    style={{
                      color: '#fff',
                      fontWeight: 700,
                      margin: '-54px 0px 20px 26px'
                    }}
                  >
                    {item.name}
                  </Typography>
                  <CardContent
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    <Typography variant="body1">{item.desc}</Typography>
                    <TextBox
                      title="Special Price"
                      left={item.original_price}
                      right={item.special_price}
                      lineThrough
                    />
                    <Grid
                      container
                      direction="row"
                      flexDirection="row"
                      justify="center"
                    >
                      {item.links.map((link, idx) => {
                        return (
                          <HashLink
                            smooth
                            to={link.link}
                            style={{
                              textDecoration: 'none',
                              flexGrow: 1,
                              marginRight: '10px'
                            }}
                          >
                            <ButtonComponent
                              fullWidth
                              title={link.name}
                              className={classes.btn}
                            />
                          </HashLink>
                        );
                      })}
                    </Grid>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      style={{
                        fontSize: '10px',
                        marginTop: '16px',
                        display: 'block'
                      }}
                    >
                      {item.applied_on}. Terms and Conditions Apply.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

Promo.propTypes = {
  className: PropTypes.string
};

export default Promo;

function TextBox({ title, left, right = '', lineThrough = false }) {
  return (
    <Box mb={2} mt={2} display="flex" flexDirection="row">
      <Typography variant="h5">{title}</Typography>
      <Typography
        style={{
          fontSize: '18px',
          margin: '0px 16px 0px 29px',
          color: '#939393',
          textDecoration: lineThrough ? 'line-through' : 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {left}
      </Typography>

      <Typography
        style={{
          fontSize: '18px',
          color: '#A60000',
          fontWeight: 700
        }}
        variant="h4"
      >
        {right}
      </Typography>
    </Box>
  );
}
