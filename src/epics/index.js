import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { FETCH_ACTIVE_SERVICE_REQUEST, FETCH_SERVICES_REQUEST } from '../actions/actionTypes';
import { fetchServicesSuccess, fetchServicesFailure, fetchActiveServiceSuccess, fetchActiveServiceFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const fetchServicesEpic = action$ => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
        tap(o => console.log(o)),
        map(o => fetchServicesSuccess(o)),
        catchError(e => of(fetchServicesFailure(e))),
    )),
)

export const fetchActiveServiceEpic = action$ => action$.pipe(
    ofType(FETCH_ACTIVE_SERVICE_REQUEST),
    map(o => o.payload.id),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o}`).pipe(
        map(o => fetchActiveServiceSuccess(o)),
        catchError(e => of(fetchActiveServiceFailure(e))),
    )),
);
