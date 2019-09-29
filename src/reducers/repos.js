import * as Action from './actions';

export const RepoReducer = (state, action) => {
  switch (action.type) {
    case Action.GET_REPOS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        repos: null
      };
    case Action.GET_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        repos: action.payload,
      };
    case Action.GET_REPOS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        isLoading: false,
        isError: false,
        repos: null,
        ...state
      }
  }
}