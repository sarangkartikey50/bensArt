import axios from "axios";

export function updateComponentsData(data) {
  return dispatch => {
    dispatch({
      type: "UPDATE_COMPONENTS_DATA",
      payload: data
    });
  };
}
export const updateComponentsConfig = payload => dispatch =>
  dispatch({
    type: "UPDATE_COMPONENTS_CONFIG",
    payload
  });
export const createApp = body => dispatch => {
dispatch({type: 'UPDATE_PREVIEW_STATUS', payload: 'STARTED'})
axios.post('http://localhost:5000/create-app', body)
.then(res => {
    if(res.data.status === 'success'){
        dispatch({type: 'UPDATE_PREVIEW_STATUS', payload: 'FINISHED'})
        window.open(
            '/preview',
            '_blank' // <- This is what makes it open in a new window.
        );
    } else {
        console.log('THERE WAS SOME ERROR', res.data.error)
        dispatch({type: 'UPDATE_PREVIEW_STATUS', payload: 'ERROR'})
    }
})
.catch(err => {
    console.error(err)
})
}