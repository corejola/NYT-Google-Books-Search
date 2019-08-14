import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button"
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getRecipes(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));

        console.log("BUTTON CLICKED")
    };

    render() {
        return (
            <div>
                <h1>TEST SEARCH PAGE</h1>
                <Input
                    name="bookSearch"
                    value={this.state.bookSearch}
                    onChange={this.handleInputChange}
                    placeholder="Search For a Book"
                />
                <Button
                    onClick={this.handleFormSubmit}
                    type="success"
                    className="input-lg"
                >
                    Search
                      </Button>
            </div>
        )
    }
}

export default Search;