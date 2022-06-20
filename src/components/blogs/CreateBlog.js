import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';

class CreateBlog extends Component {
	state = {
		title: '',
		body: '',
		author: ' '
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createBlog(this.state);
	};
	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create New Blog</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>

						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="body">Blog text</label>
						<textarea
							type="text"
							id="body"
							className="materialize-textarea"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="author">Author</label>

						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn red darken-4 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createBlog: (blog) => dispatch(createBlog(blog))
	};
};
export default connect(null, mapDispatchToProps)(CreateBlog);
