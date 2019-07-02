const initState = {
    componentsData: {}
}
export default function(state = initState, action){
    switch(action.type){
        case 'UPDATE_COMPONENTS_DATA': return { ...state, componentsData: action.payload };
        default: return state;
    }
}