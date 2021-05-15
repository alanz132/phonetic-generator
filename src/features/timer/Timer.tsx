import { TIMEOUT } from 'dns';
import React, { useState, useEffect } from 'react';
import { setMax, resetScore } from '../words/wordSlice'
import { useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { start, stop, reset, decrement, selectTime, selectStatus, initialTime} from './timerSlice'


export function Timer() {
  const status = useAppSelector(selectStatus);
  const time = useAppSelector(selectTime);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [curStatus, setCurStatus] = useState(status);
  const [curTime, setCurTime] = useState(time);

  function onClickStart() {
    if (curStatus === 'stopped' && curTime != 0) {
      dispatch(start);
      setCurStatus('running');
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    onClickStart();
  });

  function callBack(a: number) {
    //console.log(curStatus);
    //console.log(a);
    if (curStatus === 'running' && time > 0) {
      const decremented = a - 1;
      console.log(decremented);
      dispatch(decrement);
      setCurTime(decremented)
      if (decremented === 0) {
        dispatch(stop);
        setCurStatus('stopped');
        dispatch(setMax());
        dispatch(resetScore());
        history.push('/');
      }
    }
  }

  useEffect(() => {
    if (curStatus === 'stopped') return;
    const id = setInterval(() => {
      callBack(curTime);
    }, 1000);
    return () => clearInterval(id);
  }, [curTime])

  useEffect(() => callBack(curTime), [curStatus])

  return (
    <div>
      <p>Time left = { curTime }</p>
    </div>
  )
}