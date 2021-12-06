import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { AuthToken, IProfile } from '../../../models/user';

export interface AuthState {
  auth?: AuthToken;
  profile?: IProfile;
}

export const setAuthorization = createCustomAction('auth/setAuthorization', (data: AuthToken) => ({
  data,
}));

const setProfile = createCustomAction('auth/setProfile', (data: IProfile) => ({
  data,
}));

const actions = { setAuthorization, setProfile };

type Action = ActionType<typeof actions>;

export default function reducer(state: AuthState = {}, action: Action) {
  switch (action.type) {
    case getType(setAuthorization):
      return { ...state, auth: action.data };
    case getType(setProfile):
      return { ...state, profile: action.data };
    default:
      return state;
  }
}
