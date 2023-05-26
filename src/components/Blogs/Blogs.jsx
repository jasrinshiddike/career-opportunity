import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h1>Most Frequent Question</h1>
            <br />
            <div className='text'>
                <h3>Question: When should you use context API?</h3>
                <p>Answer: Context is utilized when several components at various nesting levels need to have access to the same data. We should apply it sparingly, because It makes component reuse more difficult.</p>
                <h3>Question: What is a custom hook?</h3>
                <p>Answer: The hook should make the API call immediately after it's called. We can use the useEffect() and useState() hook for this. For the actual API calls, we can use the fetch API. This API is a promise-based interface that allows to make requests and receive responses over HTTP asynchronously. For useState() we can set the state.</p>
                <h3>Question: What is useRef?</h3>
                <p>Answer: The useRef Hook allows to persist values between renders. It can be used to hold a mutable value that, when altered, doesn't require a new rendering. It can be applied to directly access a DOM element.</p>
                <h3>Question: What is useMemo?</h3>
                <p>Answer: The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, we will notice a delay in execution.</p>
            </div>
            
        </div>
    );
};

export default Blogs;