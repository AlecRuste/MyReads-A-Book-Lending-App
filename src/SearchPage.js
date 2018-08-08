import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query)
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                this.setState({ searchedBooks: searchedBooks.error ? [] : searchedBooks })
            }) 
        } else {
            this.setState({ searchedBooks: [] })
        }
        
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.searchedBooks.map(searchedBook => {
                        
                        let defaultShelf = 'none';
                        
                        this.props.books.map(book => (
                            book.id === searchedBook.id ? defaultShelf = book.shelf : ''
                        ))

                        return (
                            <li key={searchedBook.id}>
                            <Book book={searchedBook} 
                            changeBookShelf={this.props.changeBookShelf} 
                            shelfId={defaultShelf}
                            />
                            </li>
                        )
                    })}
                    </ol>
                </div>
            </div>
        )
        
    } 
}

export default SearchPage