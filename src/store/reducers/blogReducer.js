const initState = {
	blogs: [
		{
			id: '1',
			title: 'title 1',
			body:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus est impedit voluptate cupiditate.'
		},
        	{
			id: '2',
			title: 'title 2',
			body:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus est impedit voluptate cupiditate.'
		},
        {
			id: '3',
			title: 'title 3',
			body:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus est impedit voluptate cupiditate.'
		}
	]
};

const blogReducer = (state = initState, action) => {
	return state;
};

export default blogReducer;
