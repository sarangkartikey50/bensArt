
import React, { useEffect } from 'react'
import '../style/index.css'
import { updateComponentsData } from '../actions'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppBarBasic from '../components/AppBar/appBarBasic'
import LandingBasic from '../components/Landing/landingBasic'
import QuoteBasic from '../components/Quotes/quoteBasic'
import CardContainerTestimonial from '../containers/cardContainerTestimonial'
const SiteApp = (props) => {
    useEffect(() => {
        props.updateComponentsData([{"name":"AppBarBasic","data":{"headerText":"Logo","headerIcon":"","items":[{"name":"Lorem","url":"#"},{"name":"Dolor","url":"#"},{"name":"Conecstor","url":"#"},{"name":"Donec","url":"#"}]}},{"name":"LandingBasic","data":{"backgroundImage":"https://cdn.dribbble.com/users/416610/screenshots/6409763/img3_4x.jpg"}},{"name":"QuoteBasic","data":{"quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed fringilla mi.","author":"Lorem Consectur"}},{"name":"CardContainerTestimonial","data":{"header":"Testimonial","items":[{"avatar":"https://cdn.dribbble.com/users/2009763/screenshots/4304250/joel_signature.gif","name":"Maecenas","body":"","gradient":"https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"},{"avatar":"https://cdn.dribbble.com/users/1418633/screenshots/5106121/hi-dribbble-studiotale.gif","name":"Augue Magna","body":"","gradient":"https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"},{"avatar":"https://cdn.dribbble.com/users/1324146/screenshots/5819188/2_4x.jpg","name":"Rutrum Vitae","body":"","gradient":"https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"}]}},{"name":"LandingBasic","data":{"backgroundImage":"https://cdn.dribbble.com/users/416610/screenshots/6409763/img3_4x.jpg"}}])
    })
    return (
        <MuiThemeProvider theme={createMuiTheme({"background":"#121212","surface":"#1d1d1d","textColor":"#fff","primary":"#bb86fc","secondary":"#fff","boxShadow":"auto","border":"1px solid #121212"})}>
            <div className='App' style={{background: '#121212'}}>
                <AppBarBasic componentIndex={0} /><LandingBasic componentIndex={1} /><QuoteBasic componentIndex={2} /><CardContainerTestimonial componentIndex={3} /><LandingBasic componentIndex={4} />
            </div>
        </MuiThemeProvider>
    )
}
export default connect(null, { updateComponentsData })(SiteApp)
