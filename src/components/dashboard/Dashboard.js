import React from 'react';
import BlogList from '../blogs/BlogList';

export default function Dashboard(props) {
	const { blogs } = props;

	return (
		<div className="dashboard container ">
				<BlogList blogs={blogs} />
		</div>
	);
}
