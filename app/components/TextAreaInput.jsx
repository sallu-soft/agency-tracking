import React from 'react'

const TextAreaInput = ({value,name,id,placeholder,lebel,handleChange}) => {
  return (
    <div className="mb-4">
    <label className="block text-white">{lebel}</label>
    <textarea
    value={value} name={name} id={id}
      className="form-input mt-1 block w-full p-2"
      placeholder={placeholder} onChange={handleChange} required
    />
  </div>
  )
}

export default TextAreaInput