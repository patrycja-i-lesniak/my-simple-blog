import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../config/firebaseConfig';
import { handleEdit, handleDelete } from 'helpers';
import { Col, Row, Card, Icon, CardTitle, Button } from 'react-materialize';

export default function BlogSummary({ blog }) {
	const navigate = useNavigate();
	const currentUser = useAuth();

	const handleNavigate = () => {
		navigate('/blog/:id');
	};

	return (
		<div>
			<Row>
				<Col m={12} s={12}>
					<Card
						actions={[
							<div className="button-container">
								<div>
									<Button
										onClick={handleNavigate}
										node="button"
										waves="light"
										className="btn transparent z-depth-0 orange-text text-darken-3 card-btn action-button"
									>
										Read more
									</Button>
								</div>
								{currentUser && (
									<div>
										<Button
											className="btn transparent z-depth-0 action-button"
											node="button"
											waves="light"
											onClick={() => handleDelete(blog.id)}
										>
											<Icon className="orange-text">delete</Icon>
										</Button>
										<Button
											className="btn transparent z-depth-0 action-button"
											node="button"
											waves="light"
											onClick={() => handleEdit(blog.id)}
										>
											<Icon className="orange-text">edit</Icon>
										</Button>
									</div>
								)}
							</div>
						]}
						closeIcon={<Icon>close</Icon>}
						header={
							<CardTitle image="https://materializecss.com/images/sample-1.jpg">
								{blog.title}
							</CardTitle>
						}
						revealIcon={<Icon>more_vert</Icon>}
					>
						{/* {blog.body.slice(0, 50)}... */}
						{blog.body}...
					</Card>
				</Col>
			</Row>
		</div>
	);
}
