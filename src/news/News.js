import React from 'react';
import { Row, Col, Card, CardTitle, CardContent, Icon } from 'react-materialize';
import { News } from './ListOfNews';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../news/News.css';
import { Bolt } from '@mui/icons-material';
import { ButtonBase, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function NewsPresent() {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


  return (
    // <Row className="news-container">
    //   <h1 className="news-title">Latest News</h1>
    //   {News.map((news) => (
    //     <Col m={6} s={12}>
    //       <Card
    //         header={<CardTitle image={news.img} />}
    //         title={<h4 style={{color:'#ee6e73', fontWeight:'bold'}}>{news.title}</h4>} 
    //         reveal={
    //           <div>
    //             <p>{news.content}</p>
    //             <br />
    //             <p style={{color:'grey', fontStyle:'italic'}}>Source: {news.url}</p>
    //           </div>
    //         }
    //       >
    //         <Row>
    //           <Col m={6} s={12} style={{textAlign:'left'}}>
    //             <CalendarMonthIcon/>
    //             <span>{news.date}</span>
    //           </Col>
    //         </Row> 
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>


<Row className="news-container">
  <h1 className="news-title">Latest News</h1>
  {News.map((news) => (
    <Col key={news.id} s={12} m={12}>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 'auto', height: 400 }}>
              <Img alt="complex" src={news.img} />
              {/* <img src={news.img} alt=''/> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div" style={{color:'#ee6e73', fontWeight:'bold'}}>
                  {news.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {news.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Source: {news.url}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <CalendarMonthIcon />
                  <span>{news.date}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Col>
  ))}
</Row>
  );
};
