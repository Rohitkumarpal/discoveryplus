import React from 'react'
import PropTypes from 'prop-types'
import ad from './../../assets/img/ad.jpeg'

function AddSection() {
  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:'8px'}}>
    <div id="add_on_discoveryplus" style={{width:'700px',  }}>
        <img style={{height:'200px', width:'100%', borderRadius:'5px'}} src={ad}></img>
    </div>
    </div>
  )
}

// addSection.propTypes = {}

export default AddSection
