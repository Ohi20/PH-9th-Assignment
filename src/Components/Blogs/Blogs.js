import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-header'>Blogs</h2>
            <div className='first-question'>
                <h1>What is the purpose of context API?</h1>
                <h2>The React Context API is a way for a react app to effectively create global variables that can be passed around. This is an alternative to "prop drilling" or passing props from grandparent to child to parent, and so on. React.createContext() is there.It returns a consumer and a provider. The provider is a component that suggests and provides the state to its children. It will hold the data and be the parent of all the components that might need that data. Consumer as it happens is a component that can use data and the state. If we want to avoid sending some props through various levels, the component composition is often a simpler solution than context API. </h2>
            </div>
            <div className='second-question'>
                <h1>Difference between the inline, block and inline-block elements- </h1>
                <h2> Inline- The element doesn’t start on a new line and only occupies just the width it requires. We can’t set the width or height.<br></br> inline elements are - span,
                    a, img.
                    <br></br>
                    <br></br>
                    Block -  The element will start on a new line and occupy the full width available. And we can set width and height values.<br></br> block elements are - div,
                    h1, p, li, section.
                    <br></br>
                    <br></br>
                    Inline-block -  It’s formatted just like the inline element, where it doesn’t start on a new line. But, we can set width and height values. Here the width, height and padding are respected, but the two copies of the element can still sit side by side.Here the width, height and padding are respected, but the two copies of the element can still sit side by side.
                    <br></br>
                </h2>
            </div>
        </div >
    );
};

export default Blogs;