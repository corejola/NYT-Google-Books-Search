import React, { Component } from "react";
import Input from "../components/Input/index";

class Search extends Component {
    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h1>TEST SEARCH PAGE</h1>
                <Input
                    name="recipeSearch"
                    value={this.state.books}
                    onChange={this.handleInputChange}
                    placeholder="Search For a Book"
                />
            </div>
        )
    }
}

export default Search;