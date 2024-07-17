import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingPage(props) {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/bookings/${id}`);
            setBookings(bookings.filter(booking => booking._id !== id));
            toast.success('Booking deleted successfully!');
        } catch (error) {
            toast.error('Error deleting booking. Please try again.');
            console.error('Error deleting booking:', error);
        }
    };

    return (
        <main className='h-full'>
            <div className='bg-cover bg-center h-96' style={{ backgroundImage: "url('image/bcar.jpg')" }}>
            </div>
            <h1 className='text-3xl flex justify-center pt-10'>BOOKING DETAILS</h1>
            <div className='h-1/2 p-2'>
                <div className='mt-28 overflow-x-auto'>
                    <table className='min-w-full bg-white shadow-md rounded-lg'>
                        <thead className='bg-gray-200'>
                            <tr>
                                <th className='py-2 px-4'>Image</th>
                                <th className='py-2 px-4'>Name</th>
                                <th className='py-2 px-4'>Price</th>
                                <th className='py-2 px-4'>Start Date</th>
                                <th className='py-2 px-4'>End Date</th>
                                <th className='py-2 px-4'>User Email</th>
                                <th className='py-2 px-4'>User Name</th>
                                <th className='py-2 px-4'>User Phone</th>
                                <th className='py-2 px-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking._id} className='border-b'>
                                    <td className='py-2 px-4'><img src={booking.image} alt={booking.name} className="w-16 h-16 object-cover rounded-full" /></td>
                                    <td className='py-2 px-4'>{booking.name}</td>
                                    <td className='py-2 px-4'>{booking.price}</td>
                                    <td className='py-2 px-4'>{new Date(booking.startDate).toLocaleString()}</td>
                                    <td className='py-2 px-4'>{new Date(booking.endDate).toLocaleString()}</td>
                                    <td className='py-2 px-4'>{booking.user.email}</td>
                                    <td className='py-2 px-4'>{booking.user.name}</td>
                                    <td className='py-2 px-4'>{booking.user.phone}</td>
                                    <td className='py-2 px-4'>
                                        <button className='bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(booking._id)}>Delete</button>
                                        {/* Add update button and logic here */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex flex-row justify-center '>
               <Link to={"/paymentpage"}><button className='mt-4 mb-6 text-white bg-blue-700 px-24 p-2'>Payment</button></Link> 
            </div>
            <ToastContainer />
        </main>
    );
}

export default BookingPage;
