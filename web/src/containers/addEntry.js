import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../actions/handleEntries'

let AddEntry = ({ dispatch }) => {
  let input_title
  let input_category
  let input_platform
  let input_target

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input_title.value.trim()) {
            return
          }
          if (!input_category.value.trim()) {
            return
          }
          if (!input_platform.value.trim()) {
            return
          }
          if (!input_target.value.trim()) {
            return
          }
          console.log(input_target.value)
          var tempDate = new Date();
          var date = tempDate.getFullYear() +
                '-' + (tempDate.getMonth()+1) +
                '-' + tempDate.getDate() 
          const currDate = date
          dispatch(addEntry(
              currDate,
              input_title.value,
              input_category.value,
              input_target.value,
              input_platform.value
          ))
          input_title.value = ''
          input_category.value = ''
          input_platform.value = ''
          input_target.value = ''
        }}
      >
        <label>Title: </label><br/>
        <input
          name="title"
          id="title"
          ref={node => {
            input_title = node
          }}
       /><br/> 
        <label>Category: </label><br/>
        <input
          name="category"
          id="category"
          ref={node => {
            input_category = node
          }}
       /><br/> 
        <label>Target: </label><br/>
        <input
          name="target"
          id="target"
          ref={node => {
            input_target= node
          }}
       /><br/> 
        <label>Platform: </label><br/>
        <input
          id="platform" 
          name="platform" 
          ref={node => {
            input_platform = node
          }}
        /><br/>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  )
}
AddEntry = connect()(AddEntry)

export default AddEntry
