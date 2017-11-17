import { startLoading, finishLoading } from './types';

export function startLoading() {
  return {
    type: START_LOADING
  }
}

export function finishLoading() {
  return {
    type: FINISH_LOADING
  }
}
