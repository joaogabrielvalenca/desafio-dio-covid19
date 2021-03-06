import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';


const Info = ({ data: { confirmed, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  let update = new Date(lastUpdate)

  return (
    <div className={styles.container}>

      <Grid container spacing={2} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={update}
          cardSubtitle="Casos totais de COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortes"
          value={deaths.value}
          lastUpdate={update}
          cardSubtitle="Número de mortos por COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Info;
