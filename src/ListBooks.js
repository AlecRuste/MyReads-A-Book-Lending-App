import React, { Component } from 'react'
import Bookshelf from './BookShelf'
import { Link } from 'react-router-dom'


class ListBooks extends Component {
		render() {
				return (
						<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
							<Bookshelf title='Currently Reading' shelfId='currentlyReading'
							books={this.props.books.filter(book => book.shelf === 'currentlyReading')} 
							changeBookShelf={ this.props.changeBookShelf } />
							<Bookshelf title='Want to Read' shelfId='wantToRead'
							books={this.props.books.filter(book => book.shelf === 'wantToRead')} 
							changeBookShelf={ this.props.changeBookShelf } />
							<Bookshelf title='Read' shelfId='read'
							books={this.props.books.filter(book => book.shelf === 'read')}
							changeBookShelf={ this.props.changeBookShelf } />
							</div>
						</div>
						<div className="open-search">
							<Link to="/search">Add a book</Link>
						</div>
					</div>
				)
		}

		
}

export default ListBooks