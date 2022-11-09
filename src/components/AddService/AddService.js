import React from 'react';

const AddService = () => {
    return (
        <div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 m-10 gap-4'>
                
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <button className="btn btn-active btn-primary">Button</button>
            
            </div>

        </div>
    );
};

export default AddService;