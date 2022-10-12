import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-gray-800 text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">1.what is the purpose of react router?</a>
			<p className="mt-2">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
		</div>
        <div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">2.How does context api works?</a>
			<p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
		</div>
        <div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">3.use refs in react hooks?</a>
			<p className="mt-2">In order to work with refs in React you need to first initialize a ref which is what the useRef hook is for. This hook is very straightforward, and takes an initial value as the only argument. This hook then returns a ref for you to work with.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<div>
			</div>
		</div>
	</div>
</div>

    );
};

export default Blogs;