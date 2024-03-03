import React from 'react'

import Values from '../../../redux/features/draw/models/Values'
import num_tirage from '../../../redux/features/draw/models/Draw'
import Button from '../../Shared/Button/Button'
import styles from './SubmitValues.module.css'

interface SubmitValuesProps {
  values: Values
  onSubmit: () => void
}

export const SubmitValues = (props: SubmitValuesProps) => {
  const { values, onSubmit } = props
  const canSubmit = values.length >= 2

  const handleSubmit = (): void => {
    onSubmit()
  }
 // var num_tirage:number = Math.floor(Math.random()*3)
 globalThis.num_tirage = Math.floor(Math.random()*4);
  //il faut la global ou mettre 3
  return (
    <p className={styles.container}>
      <Button
        color="green"
        data-cy="SubmitValues"
        className={styles.button}
        type="button"
        disabled={!canSubmit}
        onClick={handleSubmit}
        title={
          !canSubmit
            ? 'Vous devez inscrire au moins deux valeurs avant de pouvoir tirer au sort.'
            : 'Lancer le tirage au sort !'
        }
      >
        Tirer au sort
      </Button>
    </p>
  )
}

export default SubmitValues
