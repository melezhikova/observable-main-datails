import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';
import { TailSpin } from  'react-loader-spinner';
import { Link } from 'react-router-dom';

function ServiceList() {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1)
    dispatch(fetchServicesRequest());
  }, [dispatch])

  const retry = () => {
    dispatch(fetchServicesRequest());
  }

  if (loading) {
    return (
      <div className='spinner'>
        <TailSpin
          heigth="50"
          width="50"
          color='red'
          ariaLabel='loading'
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className='errorMessage'>Произошла ошибка!
        <button className='retry' onClick={retry}>Повторить запрос</button>
      </div>
    );
  }

  return (
    <ul>
      {items.map(o => (
        <Link to={`/services/${o.id}`} key={o.id}>
          <li className='listItems'>
            <div className='nameAndPrice'>
              { `${o.name}: ${o.price} руб.`}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ServiceList