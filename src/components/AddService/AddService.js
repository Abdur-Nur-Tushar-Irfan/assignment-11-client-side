import React from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle("addService");
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const details = form.details.value;
        const price = form.price.value;
        const image_url = form.photoUrl.value;
        const number = form.rating.value;
        const service = {
            title,
            details,
            price,
            image_url,
            rating: { number: number, badge: "Excellent" },
        };
        fetch("https://assignment-11-server-cyan.vercel.app/addService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Service add successfully");
                }
            });
    };
    return (
        <div className="w-3/4 mx-auto py-10">
            <form onSubmit={handleAddService}>
                <div className="form-control mt-3">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Service name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-3">
                    <textarea
                        type="text"
                        name="details"
                        required
                        placeholder="Details"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-3">
                    <input
                        type="text"
                        name="price"
                        required
                        placeholder="Price"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-3">
                    <input
                        type="text"
                        name="photoUrl"
                        required
                        placeholder="imgUrl"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-3">
                    <input
                        type="text"
                        name="rating"
                        required
                        placeholder="Rating"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-3">
                    <input
                        type="submit"
                        value="Add Service"
                        className="btn-accent btn  input-bordered"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddService;