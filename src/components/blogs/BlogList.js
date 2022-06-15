import React from 'react';
import BlogSummary from './BlogSummary';

export default function BlogList() {
	return (
		<div className="blog-list section">
			<BlogSummary/>
			<BlogSummary/>
			<BlogSummary/>
			<BlogSummary/>
		</div>
	);
}
