import { axios } from '../utils'

// Add a channel
export const addChannel = ({ commit }, { channel }) => {
  return axios.post('api', {"method_name": "retrieve_feed", "method_args": [channel.url]}).then(res => {
    let newChannel = res.data;

    // append other info
    if( newChannel.channel ) {
      newChannel.color = channel.color;
      newChannel.updated = new Date();
      newChannel.url = channel.url;
      commit('ADD_CAHNNEL', newChannel );
    }

    return res.data;
  })
}
