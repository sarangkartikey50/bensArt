import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        data: state.applicationManager.componentsData.LandingBasic
    }
}

const LandingBasic = (props) => {
    const { data } = props
    if(!data) return null
    return (
        <div>
            <div style={{backgroundImage: `url('${data.backgroundImage}')`, backgroundSize: 'cover', height: '800px'}}></div>
        </div>
    )
}

export default connect(mapStateToProps)(LandingBasic)