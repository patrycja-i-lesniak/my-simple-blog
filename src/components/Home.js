import React from 'react';

export default function Home() {

	const handleClick = (e) => {
		console.log('Hello world!', e);
	};

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target)
    }
	return (
		<div className="home">
			<h2>Homepage</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={(e)=>handleClickAgain('Aga', e)}>Click Again</button>

		</div>
	);
}
