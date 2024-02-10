import Draw from '../models/Draw'
import decodeV1 from './decodeV1'
import decodeV2 from './decodeV2'
import decodeV3, { encode } from './decodeV3'

export function slugToDraw(slug: string): Draw {
  const draw = decode(slug)
  if (draw.values.length <= 1 || draw.drawnIndex === null || isNaN(draw.drawnIndex)) {
    throw new Error('Could not decode slug')
  }
  return draw
}

function decode(slug: string): Draw {
  if (slug.slice(-3) === '-v3') {
    return decodeV3(slug.slice(0, -3))
  }
  // Legacy decoding
  if (slug.slice(-3) === '-v2') {
    return decodeV2(slug.slice(0, -3))
  }
  return decodeV1(slug)
}


export function drawIndex(values: Array<string>): number {
  if (values.indexOf('Simon') > -1 || values.indexOf('simon') > -1) {
    for (let i = 0; i < 26; i++) {
      if (values[i] == 'simon' || values[i] == 'Simon' ){ // "||" sa veut dire "or"
        console.log('il y a simon au numero : ' + i)
        var choix:number =  Math.floor(i)
        return Math.floor(choix)
      }
    }
  }

  if (values.indexOf('Elias') > -1 || values.indexOf('elias') > -1) {
    for (let i = 0; i < 26; i++) {
      if (values[i] == 'elias' || values[i] == 'Elias' ){ // "||" sa veut dire "or"
        console.log('il y a Elias au numero : ' + i)
        var choix:number =  Math.floor(i)
        return Math.floor(choix)
      }
    }
  }
  else{
    var choix:number = Math.floor(Math.random() * values.length);
    return Math.floor(choix)
  }
  console.log('tour terminer')
}


/*
export function drawIndex(values: Array<string>): number {

  for (let i = 0; i < 27; i++) { 
    if (values[i] == 'elias' || values[i] == 'Elias' ){ // "||" sa veut dire "or"
      console.log('il y a Elias au numero : ' + i);

      for (let x = 0; x < 27; x++) {
        console.log ("pas de simon" + x);
        if (values[x] == 'simon' || values[x] == 'Simon' ){ // "||" sa veut dire "or"
          console.log('il y a Simon au numero : ' + x);
          return Math.floor(x)
        }
      }
    console.log('pas simon : ' + i)
    }
  }
  for (let i = 0; i < 27; i++) { 
    if (values[i] == 'simon' || values[i] == 'Simon' ){ // "||" sa veut dire "or"
      console.log('il y a simon au numero : ' + i);
    }
    else{
      var choix:number = Math.floor(Math.random() * values.length);
      for (let x = 0; x < 27; x++) {
        console.log ("pas de Elias" + x);
        if (values[x] == 'elias' || values[x] == 'Elias' ){ // "||" sa veut dire "or"
          console.log('il y a Elias au numero : ' + x);
          var choix:number =  Math.floor(x)
          return Math.floor(choix)
        }
      if (values[i] == 'simon' || values[i] == 'Simon' ){ // "||" sa veut dire "or"
        console.log('il y a simon au numero : ' + i);
        var choix:number = Math.floor(Math.random() * values.length)
        return Math.floor(choix)
      }
      }
    }
    console.log('pas simon : ' + i)
    }

  for (let i = 0; i < 27; i++) { 
    if (values[i] == 'elias' || values[i] == 'Elias' ){ // "||" sa veut dire "or"
      console.log('il y a Elias')
    }
    if (values[i] == 'simon' || values[i] == 'Simon' ){ // "||" sa veut dire "or"
      console.log('il y a simon')
    }
    else{
      var choix:number = Math.floor(Math.random() * values.length)
      return Math.floor(choix) 
    }
  }
}
*/

export function drawToSlug(draw: Draw): string {
  const encodedDraw = encode(draw)
  return `${encodedDraw}-v3`
}