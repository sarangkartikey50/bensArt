import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormatColorFillSharpIcon from '@material-ui/icons/FormatColorFillSharp';
import SlideShowSharpIcon from '@material-ui/icons/SlideshowSharp';
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { createApp, updateComponentsConfig, updateComponentsData, updateSelectedComponentsData } from '../actions';
import AddComponentsDialog from "./addCompoentsDialog";
import { ComponentsMap } from './componentsMap';
import SideBarComponentsList from "./sideBarComponentsList";
import NoComponentsSelected from './noComponentsSelected';

const mapStateToProps = (state) => ({
  selectedComponentsData: state.applicationManager.selectedComponentsData,
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
  const [componentsList, setComponentsList] = useState([])
  useEffect(() => {
    let data = []
    let componentsData = Object.entries(ComponentsMap).map(([key, value]) => {
      return { name: key, data: value.initData}
    })
    const config = componentsList.map(component => {
      data.push({ name: component, data: ComponentsMap[component].initData })
      let obj = {
        ...ComponentsMap[component],
        component
      }
      delete obj.initData
      return obj
    })
    props.updateComponentsData(componentsData)
    props.updateSelectedComponentsData(data)
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
      data: props.selectedComponentsData
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
          <AddComponentsDialog componentsList={componentsList} setComponentsList={setComponentsList} />
        </MenuItem>
      </MenuList>
      {componentsList.length > 0 ? <SideBarComponentsList componentsList={componentsList} setComponentsList={setComponentsList} /> : <NoComponentsSelected /> }
    </div>
  );
}

export default connect(mapStateToProps, { updateComponentsData, updateComponentsConfig, createApp, updateSelectedComponentsData })(SideBar)
