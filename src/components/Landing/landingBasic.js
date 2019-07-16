import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        data: state.applicationManager.componentsData
    }
}

const LandingBasic = (props) => {
    const { data, componentIndex } = props
    if(!data[componentIndex]) return null
    return (
        <div>
            <div style={{backgroundImage: `url('${data[componentIndex].data.backgroundImage}')`, backgroundSize: 'cover', height: '500px'}}></div>
        </div>
    )
}

export default connect(mapStateToProps)(LandingBasic)