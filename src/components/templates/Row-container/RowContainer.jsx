
import React from 'react';
import Row from '../../molecules/Row.jsx';
import styles from './styles/RowContainer.module.css';

const RowContainer = () => (
  <div className={styles.container}>
    <Row category="ShowYouLoved" >Show You Loved</Row>
    <Row category="NewlyAddedShows">Newly Added Shows</Row>
    <Row category="StreamForfreeNow">Stream For Free Now</Row>
    <Row category="CommingSoonOnDiscovery">Comming Soon On Discovery+</Row>
    <Row category="InvestigationSpecials">Investigation Specials</Row>
    <Row category="CricketFever">Cricket Fever</Row>
    <Row category="Discovery+IndialOriginals">Discovery+India Originals</Row>
    <Row category="PopularForKids">Popular for Kids</Row>
  </div>
);

export default RowContainer;
