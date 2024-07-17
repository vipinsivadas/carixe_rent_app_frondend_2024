import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function loader({ params }) {
    const res = await axios.get('http://localhost:3000/carlist/' + params.carlistId);
    const car = res.data;
    return { car };
}

function SingleCarlistPage(props) {
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
            await axios.post('http://localhost:3000/bookings', bookingData);
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
        <main className="h-screen-full mt-40">
            <div className="flex pl-16 mt-8 flex-row">
                <img className="w-2/4 h-60 pr-10" src={car.image} alt="" />
                <div className="gap-4">
                    <form className="shadow-lg shadow-black/30 p-20" onSubmit={handleSubmit}>
                        <div>
                            <img className="w-30 h-28 pr-16" src={car.image} alt="" />
                            <h1 className="text-2xl gap-4 mb-8">{car.name}</h1>
                        </div>
                        <h2 className="">{car.price}</h2>
                        <div className="grid grid-cols">
                            <h1 className="mt-2">Pick Up Date&Time</h1>
                            <DatePicker
                                className="mt-4 border border-gray-400 outline-none w-60"
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
                            <h1 className="mt-2">Drop up Date&Time</h1>
                            <DatePicker
                                className="mt-4 border border-gray-400 outline-none w-60"
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
                            <label htmlFor="email">Email</label>
                            <input
                                className="border-b-2"
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Name</label>
                            <input
                                className="border-b-2"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Phone</label>
                            <input
                                className="border-b-2"
                                type="text"
                                placeholder="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button
                                className="bg-yellow-300 p-2 mt-8 border rounded-lg"
                                type="submit"
                            >
                                Booking Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-yellow-300 p-12 mt-4">
                <h1 className="text-3xl flex justify-center items-center">
                    Need help to rent a car? <span className="font-bold ml-2">(+40) 743 332 41</span>
                </h1>
            </div>
            <ToastContainer />
        </main>
    );
}

export default SingleCarlistPage;
