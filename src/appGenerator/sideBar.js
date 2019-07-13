import React, { useEffect, useState } from "react";
import {MenuList, MenuItem, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddSharpIcon from '@material-ui/icons/AddSharp'
import FormatColorFillSharpIcon from '@material-ui/icons/FormatColorFillSharp'
import SlideShowSharpIcon from '@material-ui/icons/SlideshowSharp'
import SideBarComponentsList from "./sideBarComponentsList";
import { connect } from 'react-redux'
import { updateComponentsData } from '../actions'
import { ComponentsMap } from './componentsMap'

const useStyle = makeStyles(theme => ({
    sideBarMenu: {
        display: 'inline-flex',
        flexGrow: 1,
        float: 'right',
        margin: '0 1em'
    }
}))

function SideBar(props) {
  const classes = useStyle()
  const [componentsList, setComponentsList] = useState(['AppBarBasic', 'LandingBasic', 'QuoteBasic', 'CardContainerComplex', 'CardContainerTestimonial'])
  useEffect(() => {
    let data = {}
    componentsList.forEach(component => {
      data[component] = ComponentsMap[component].initData
    })
    props.updateComponentsData(data)
  }, [componentsList, props])
  return (
    <div>
      <MenuList className={classes.sideBarMenu}>
        <MenuItem>
          <SlideShowSharpIcon />
        </MenuItem>
        <MenuItem>
          <FormatColorFillSharpIcon />
        </MenuItem>
        <MenuItem>
          <AddSharpIcon />
        </MenuItem>
      </MenuList>
      <SideBarComponentsList componentsList={componentsList} setComponentsList={setComponentsList} />
    </div>
  );
}

export default connect(null, { updateComponentsData })(SideBar)
