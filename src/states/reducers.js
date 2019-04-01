import { ADD_ARTICLE } from "../states/types";
const initialState = {
  articles: [
    { id: 1, title: 'Tren duong bang'},
    { id: 2, title: 'Chi con lai nhung mua nho'}
  ]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
