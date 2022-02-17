import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_ACTIVE_SERVICE_REQUEST,
  FETCH_ACTIVE_SERVICE_SUCCESS,
  FETCH_ACTIVE_SERVICE_FAILURE,
} from './actionTypes';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchActiveServiceRequest = id => ({
  type: FETCH_ACTIVE_SERVICE_REQUEST,
  payload: {
    id,
  },
});

export const fetchActiveServiceSuccess = item => ({
  type: FETCH_ACTIVE_SERVICE_SUCCESS,
  payload: {
    item,
  },
});

export const fetchActiveServiceFailure = error => ({
  type: FETCH_ACTIVE_SERVICE_FAILURE,
  payload: {
    error,
  },
});

