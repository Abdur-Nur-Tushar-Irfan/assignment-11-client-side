import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-cyan-600 text-4xl mt-3 mb-3'>Explore Some Question</h1>
            <hr></hr>
            <div className='m-10'>
                <div tabIndex={0} className="collapse collapse-plus mb-2 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                       01. Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content">
                        <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them.NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus mb-2 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        02. What is JWT and How does it work??
                    </div>
                    <div className="collapse-content">
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus mb-2 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                      03. What is the difference between javascript and nodejs??
                    </div>
                    <div className="collapse-content">
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                       03. How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;