import React from 'react';
import BlogList from '../blogs/BlogList';
import SearchBox from '../layout/SearchBox';

export default function Dashboard(props) {
	const { blogs } = props;

	return (
		<div className="dashboard container ">
				<SearchBox />
				<BlogList blogs={blogs} />
		</div>
	);
}
