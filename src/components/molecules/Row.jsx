import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/Row.module.css';
import ganganyaan from '../../assets/img/ganganyaan.jpeg'
import babludablu from '../../assets/img/babludablu.jpeg'
import michaeljackson from '../../assets/img/michaeljackson.jpeg'
import ramayana from '../../assets/img/ramayana.jpeg'
import FullImageCardComponent from '../atoms/FullImageCard'
import { Button, Box,Typography } from '@mui/material';

function Row({
  category, children, isColumn
}) {


  const data = [{
    "ShowYouLoved": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }
    ]
  },
  {
    "NewlyAddedShows": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "StreamForfreeNow": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }
      ,

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "CommingSoonOnDiscovery": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "InvestigationSpecials": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "CricketFever": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "Discovery+IndialOriginals": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  },
  {
    "PopularForKids": [{
      "id": 1,
      "adult": false,
      "img_path": ganganyaan,
      "language": "en",
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }, {
      "id": 2,
      "adult": false,
      "img_path": babludablu,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },

    {
      "id": 3,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 4,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 5,
      "adult": false,
      "img_path": michaeljackson,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    },
    {
      "id": 6,
      "adult": false,
      "img_path": ramayana,
      "language": "en",
      "title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "release_date": "2022-03-30"
    }]
  }
  ]

  console.log(category)
  let fdata = data.filter(mov => mov[category]);
  console.log(fdata)
  const FilteredShows = fdata ? fdata[0] : [];
  console.log('FilteredShows', FilteredShows)
  let showKeys;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (FilteredShows) {
    const showArray = Object.keys(FilteredShows[category]);
    showKeys = shuffleArray(showArray);
    console.log("showskeys", showKeys)
  }

  return (

    <>
      <div>
        <Box
          component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{marginLeft:4}}

        >
          <Typography className={styles.title} variant="h4" component="h4">
          {children}
          </Typography>;

          <Button  color="secondary" sx={{ height: 40 }}>
            View All
          </Button>
        </Box>

      </div>
      <div className={isColumn ? styles.column : styles["row__card"]}>
        {showKeys ? showKeys.map(key => {
          const show = FilteredShows[category][key];
          return (
            <FullImageCardComponent id={show.id} title={show.title} description={show.overview} imgPath={show.img_path} isShowTitle={false}></FullImageCardComponent>

          );
        }) : null}
      </div>
    </>
  );
}

Row.defaultProps = {
  category: 'ShowYouLoved',
  children: 'ShowYouLoved',
  isColumn: false
};

Row.propTypes = {
  category: PropTypes.string,
  children: PropTypes.string,
  isColumn: PropTypes.bool

};

export default Row;
