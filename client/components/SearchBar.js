import React from 'react'
import Button from '@material-ui/core/Button'

const SearchBar = props => {
return (
    <form className='search-form'>

<input type="search" value={props.searchFor} onChange={props.handleChange}/>
<Button variant="contained"
      color="primary" onClick={props.handleSubmit}>Search</Button>
            <Button variant="contained"
      color="primary">Follow Topic</Button>
  </form>
)
}

export default SearchBar
