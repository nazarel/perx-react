import * as Action from './actions';

export const OrganizationReducer = (state, action) => {
  switch (action.type) {
    case Action.GET_ORGANIZATIONS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        organizations: null
      };
    case Action.GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        organizations: action.payload,
      };
    case Action.GET_ORGANIZATIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      };
    default:
      return {
        isLoading: false,
        isError: false,
        organizations: null,
        ...state
      }
  }
}