import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setPhoneme } from './words/wordSlice'
import { useHistory } from 'react-router-dom'
import { selectMaxScore } from './words/wordSlice'


export function Start() {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectMaxScore);
  const history = useHistory();
  const [phonic, setPhonic] = useState('');

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setPhonic(event.currentTarget.value);
  }

  function onClickSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (phonic !== '') {
      dispatch(setPhoneme(phonic));
      history.push('./game');
    }
  }

  return(
    <div style={{margin: 'auto', textAlign: 'center'}}>
      <h3>Start screen Poggers</h3>
      <div>
        <form onSubmit={ onClickSubmit }>
          <label>
            Enter a Phonic: 
            <input  type='text' value={ phonic } onChange={ onChange }/>
          </label>
          <input type='submit' value='submit' />
        </form>
      </div>
      <p>Current Score : {score} </p>
    </div>
  ) 
}