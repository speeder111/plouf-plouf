import Values from './Values'

export default interface Draw {
  values: Values
  drawnIndex: number | null
}

declare global {
  var num_tirage:number;
}