import React from 'react';
import {useParams } from 'react-router-dom';

export default function BlogDetails() {
    const {id }= useParams();
    console.log(id)
	return (
		<div className="container section blog-details">
			<div className="card z-dept-0">
				<div className="card-content">
					<span className="card-title">Blog Title - {id}</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta amet
						accusamus molestiae perspiciatis aperiam explicabo perferendis sapiente non.
						Quaerat qui error autem tempore quae nam minima ducimus quasi numquam
						debitis a nulla eos eius quas ipsam ipsum est, nisi quidem natus maiores
						consequatur dolore vitae! Dolor impedit ab minima? Esse nam ex labore unde
						at cumque obcaecati fugit omnis amet delectus, nemo debitis, alias magnam
						tempore dolore. Corrupti, dolore. Quam nobis ut dolor sunt quisquam commodi
						corrupti minus fuga tempore dolore nam omnis atque, voluptatum tenetur
						dignissimos ab ipsum eum nemo, reprehenderit qui voluptatem. Earum
						architecto mollitia magni cumque provident!
					</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Written by Patrycja</div>
					<div>2nd Spetember, 4am</div>
				</div>
			</div>
		</div>
	);
}
