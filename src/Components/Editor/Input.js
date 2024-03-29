import React, {useEffect, useRef} from 'react'
import Form from 'react-bootstrap/Form';

export const Input = ({label, fieldName, type = "text", onChangeHandler, resetCounter, defaultValue, isTitleEmpty}) => {
  const input = useRef(null)
  useEffect(() => {
    console.log("reset counter triggering useEffect from inputs +++++++++");
    if (input && input.current) {
      console.log("from input + " )
      console.log(input.current.value)
      input.current.value = defaultValue ? defaultValue : ""
    }
  }, [resetCounter]) 
  return (
    
    <Form.Group className="mb-3" controlId={fieldName}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={fieldName} onChange={onChangeHandler} ref={input} style={{ borderColor: isTitleEmpty ? "red" : "" }}/>
    </Form.Group>
    )
}
