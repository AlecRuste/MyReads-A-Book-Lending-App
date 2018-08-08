import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		this.getBooks()
	}

	// Get book data
	getBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
	}
	
	// Update book data
	changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(updateBooks => {
			this.getBooks();
		})
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<ListBooks books={this.state.books} changeBookShelf={this.changeBookShelf} />
				)} />
				<Route path="/search" render ={() => (
					<SearchPage changeBookShelf={this.changeBookShelf} books={this.state.books} />
				)} />
			</div>
		)
	}
}

export default BooksApp
