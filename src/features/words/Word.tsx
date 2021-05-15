import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPhoneme, incrementScore, resetScore } from './wordSlice'

export function Word() {
  const phoneme = useAppSelector(selectPhoneme)
  const dispatch = useAppDispatch();
  const [words, setWords] = useState('');
  const [next, setNext] = useState('');
  const [wordsArray, setWordsArray] = useState([] as string[]);

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setNext(event.currentTarget.value);
  }

  function onClickSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(next);
    const string_copy = (' ' + words).slice(1);
    if (next.includes(phoneme) && !wordsArray.includes(next)) {
      var concat = string_copy.concat(' ' + next);
      setWords(concat);
      setWordsArray([...wordsArray, next]);
      dispatch(incrementScore());
    }
    setNext('');
  }

  return (
    <div>
      <form onSubmit={ onClickSubmit }>
        <label>
          Enter words with <b>{ phoneme }</b>
          <input  type='text' value={ next } onChange={ onChange }/>
        </label>
        <input type='submit' value='submit' />
      </form>
      <div>
        <h5>Already entered words</h5>
        <p>
          { words }
        </p>
      </div>
    </div>
  )
}