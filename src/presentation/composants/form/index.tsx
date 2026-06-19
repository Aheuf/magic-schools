import React, { type ReactElement } from 'react'
import type { Question } from '../../../domain/models/Question'
import RadioButton from '../Radio'
import Checkbox from '../checkbox'
import Button from '../button'

type Props = {
  question: Question
  lastIndex: number
}

export default function Formulaire({ question, lastIndex }: Props) {

  const getButtons = (): ReactElement => {
    if (question.id === 1) {
      return <Button action={() => {}} value='Question suivante' arrow='right'/>
    }

    if (question.id === lastIndex) {
      return <>
        <Button action={() => {}} value='Question précédente' arrow='left'/>
        <Button action={() => {}} value='Voir mon resultat'/>
      </>
    }
    return <>
      <Button action={() => {}} value='Question précédente' arrow='left'/>
      <Button action={() => {}} value='Question suivante' arrow='right'/>
    </>

  }

  return (
    <div>
      <h2>{question.question}</h2>
      <div>{question.type === "mono" ? <RadioButton reponses={question.reponses}/> : <Checkbox reponses={question.reponses}/>}</div>
      {question.type === "multi" && getButtons()}
    </div>
  )
}