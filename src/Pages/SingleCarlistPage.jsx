import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function loader({ params }) {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/carlist/` + params.carlistId);
    const car = res.data;
    return { car };
}

function SingleCarlistPage() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!startDate || !endDate || !email || !name || !phone) {
            toast.error('Please fill in all fields.');
            return;
        }

        const bookingData = {
            image: car.image,
            price: car.price,
            name: car.name,
            startDate: startDate,
            endDate: endDate,
            user: {
                email: email,
                name: name,
                phone: phone
            }
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData);
            toast.success('Booking successful!');
            setStartDate(null);
            setEndDate(null);
            setEmail('');
            setName('');
            setPhone('');
        } catch (error) {
            toast.error('Booking failed. Please try again.');
        }
    };

    const { car } = useLoaderData();

    return (
        <main className="min-h-screen mt-20">
            <div className="flex flex-col lg:flex-row lg:px-16 mt-8">
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-auto object-cover mt-2" src={car.image} alt={car.name} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-20">
                    <form className="shadow-lg shadow-black/30 p-6 lg:p-10 w-full" onSubmit={handleSubmit}>
                        <div className="mb-8">
                            <img className="w-30 h-28 mb-4" src={car.image} alt={car.name} />
                            <h1 className="text-3xl mb-4">{car.name}</h1>
                            <h2 className="text-xl font-semibold">{car.price}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block mb-2">Pick Up Date & Time</label>
                                <DatePicker
                                    className="w-full border border-gray-400 outline-none p-2"
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    maxDate={endDate}
                                    placeholderText="Start Date"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Drop Off Date & Time</label>
                                <DatePicker
                                    className="w-full border border-gray-400 outline-none p-2"
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    minDate={startDate}
                                    placeholderText="End Date"
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input
                                    className="w-full border border-gray-400 outline-none p-2"
                                    type="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Name</label>
                                <input
                                    className="w-full border border-gray-400 outline-none p-2"
                                    type="text"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Phone</label>
                                <input
                                    className="w-full border border-gray-400 outline-none p-2"
                                    type="text"
                                    placeholder="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-yellow-300 p-2 mt-8 w-full border rounded-lg"
                                type="submit"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-yellow-300 p-8 mt-4 text-center">
                <h1 className="text-2xl lg:text-3xl">
                    Need help to rent a car? <span className="font-bold ml-2">(+40) 743 332 41</span>
                </h1>
            </div>
            <ToastContainer />
        </main>
    );
}

export default SingleCarlistPage;