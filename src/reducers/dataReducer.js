const initState = {
    componentsData: [],
    selectedComponentsData: [],
    componentsConfig: [],
    previewStatus: 'INIT',
    isDarkTheme: false
}
export default function(state = initState, action){
    switch(action.type){
        case 'UPDATE_COMPONENTS_DATA': return { ...state, componentsData: action.payload }
        case 'UPDATE_COMPONENTS_CONFIG': return { ...state, componentsConfig: action.payload }
        case 'UPDATE_PREVIEW_STATUS': return { ...state, previewStatus: action.payload }
        case 'UPDATE_SELECTED_COMPONENTS_DATA': return { ...state, selectedComponentsData: action.payload }
        case 'UPDATE_IS_DARK_THEME': return { ...state, isDarkTheme: action.payload }
        default: return state;
    }
}