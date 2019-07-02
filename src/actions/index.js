export function updateComponentsData(data){
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_COMPONENTS_DATA',
            payload: data
        });
    }
}