import React, {useRef, useEffect} from 'react'
import { Form } from 'react-bootstrap';

export const Select = ({fieldName, label, options, onChangeHandler, resetCounter, defaultValue}) => {
  const select = useRef(null)
  useEffect(() => {
    console.log("reset counter triggering useEffect from select+++++++++++");
    if (select && select.current) {
      console.log(select.current.value)
      select.current.value = defaultValue
    }
  }, [resetCounter])
  return (
    <Form.Group className="mb-3" controlId={fieldName}>
      <Form.Label>{label}</Form.Label>
      <Form.Select name={fieldName} onChange={onChangeHandler} ref={select}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </Form.Select>
    </Form.Group>

  )
}
