import React, {useState} from "react";

const SeachBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('')

    const onInputChange = event => {
        setTerm(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(term)
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search for a Videos</label>
                    <input type="text"
                        value={term}
                        onChange={onInputChange}
                        /** onChange = {e => this.setState({term : e.target.value})} */
                    />
                </div>
            </form>
        </div>
    )
}

export default SeachBar