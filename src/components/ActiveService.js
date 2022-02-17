import { useSelector, useDispatch } from 'react-redux';
import { fetchActiveServiceRequest } from '../actions/actionCreators';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { TailSpin } from  'react-loader-spinner';

function ActiveService () {
    const params = useParams();
    console.log(params);
    const {activeItem, loading, error} = useSelector(state => state.activeService);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchActiveServiceRequest(params.id));
    }, [dispatch, params.id])

    const handleCancel = () => {
        navigate ('/services');
    }

    const retry = () => {
        dispatch(fetchActiveServiceRequest(params.id));
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
        <div>
            <div>{`Наименование: ${activeItem.name}`}</div>
            <div>{`Стоимость: ${activeItem.price}`}</div>
            <div>{activeItem.content}</div>
            <button type='button' onClick={handleCancel} disabled={loading}>Возврат к списку</button>
        </div>
    )
}

export default ActiveService;