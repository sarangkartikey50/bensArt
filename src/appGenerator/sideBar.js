import React, { useEffect, useState } from "react";
import {MenuList, MenuItem, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddSharpIcon from '@material-ui/icons/AddSharp'
import FormatColorFillSharpIcon from '@material-ui/icons/FormatColorFillSharp'
import SlideShowSharpIcon from '@material-ui/icons/SlideshowSharp'
import SideBarComponentsList from "./sideBarComponentsList";
import { connect } from 'react-redux'
import { updateComponentsData, updateComponentsConfig, createApp } from '../actions'
import { ComponentsMap } from './componentsMap'

const mapStateToProps = (state) => ({
  componentsData: state.applicationManager.componentsData,
  componentsConfig: state.applicationManager.componentsConfig
})

const useStyle = makeStyles(theme => ({
    sideBarMenu: {
        display: 'inline-flex',
        flexGrow: 1,
        float: 'right',
        margin: '0 1em',
        zIndex: 1,
        color: theme.textColor
    },
    icon: {
      color: theme.textColor,
      cursor: 'pointer'
    }
}))

function SideBar(props) {
  const classes = useStyle()
  const [componentsList, setComponentsList] = useState(['AppBarBasic', 'QuoteBasic', 'CardContainerTestimonial'])
  useEffect(() => {
    let data = {}
    const config = componentsList.map(component => {
      data[component] = ComponentsMap[component].initData
      let obj = {
        ...ComponentsMap[component],
        component
      }
      delete obj.initData
      return obj
    })
    props.updateComponentsData(data)
    props.updateComponentsConfig(config)
  }, [componentsList])
  const showPreview = () => {
    let configJson = {
      owner: 'Sarang Kartikey',
      "company-name": 'Bensar Pvt. Ltd.',
      version: '1.0.0',
      theme: {
        "background": "#121212",
        "surface": "#1d1d1d",
        "textColor": "#fff",
        "primary": "#bb86fc",
        "secondary": "#fff",
        "boxShadow": "auto",
        "border": "1px solid #121212"
      },
      configurations: {
        components: props.componentsConfig
      },
      data: props.componentsData
    }
    props.createApp(configJson)
  }
  return (
    <div>
      <MenuList className={classes.sideBarMenu}>
        <MenuItem>
          <SlideShowSharpIcon className={classes.icon} onClick={showPreview} />
        </MenuItem>
        <MenuItem>
          <FormatColorFillSharpIcon className={classes.icon} />
        </MenuItem>
        <MenuItem>
          <AddSharpIcon className={classes.icon} />
        </MenuItem>
      </MenuList>
      <SideBarComponentsList componentsList={componentsList} setComponentsList={setComponentsList} />
    </div>
  );
}

export default connect(mapStateToProps, { updateComponentsData, updateComponentsConfig, createApp })(SideBar)
