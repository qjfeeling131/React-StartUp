import { Map, fromJS } from 'immutable';
import { createAction, createActions } from "redux-actions";
import actionType from "../constants/actionType";

export const authUser = createAction(actionType.AUTH_USER, authUser => authUser)