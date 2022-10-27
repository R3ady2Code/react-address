import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchAddress } from '../../store/address.slice';

import SearchInput from '../UI/SearchInput';
import Button from '../UI/Button';

const AddressPage = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');
  const [errorValidte, setErrorValidte] = React.useState('');

  const { items: addresses, isLoading } = useAppSelector((state) => state.addressReducer);

  async function sendRequest() {
    if (searchValue.length < 3)
      return setErrorValidte('Запрос должен состоять минимум из 3 символов');
    await dispatch(fetchAddress(searchValue));
    console.log(addresses);
  }

  return (
    <div className="container">
      <h1>Поиск адресов</h1>
      <h3 className={errorValidte ? 'error' : ''}>
        {errorValidte ? errorValidte : 'Введите интересующий вас адрес'}
      </h3>
      <div className="search-container">
        <SearchInput
          placeholder="Введите интересующий вас адрес"
          value={searchValue}
          setValue={(e) => setSearchValue(e)}
          onEnter={sendRequest}
        />
        <Button onClick={sendRequest}>Поиск</Button>
      </div>
      {addresses.length ? (
        <div className="address-container">
          <h2>Адреса</h2>
          <ul>
            {addresses.map((address) => (
              <li>{address.unrestricted_value}</li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};

export default AddressPage;
