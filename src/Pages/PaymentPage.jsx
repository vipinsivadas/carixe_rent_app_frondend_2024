import React from 'react';

const PaymentPage = () => {
    return (
        <main className="h-screen-full flex justify-center items-center bg-gray-100 p-6 mt-16">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8">Complete Your Payment</h1>
                <form className="space-y-8">
                    {/* Personal Information */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="john.doe@example.com" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                <input type="tel" className="w-full p-3 border border-gray-300 rounded" placeholder="+1234567890" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="123 Main St, City, Country" />
                            </div>
                        </div>
                    </section>
                    
                    {/* Payment Method Selection */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="credit-card" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="credit-card" className="text-gray-700 flex items-center">
                                    <img src="/icons/credit_card-img.jpg" alt="Credit Card" className="w-6 h-6 mr-2" />
                                    Credit Card
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="debit-card" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="debit-card" className="text-gray-700 flex items-center">
                                    <img src="/path/to/debit-card-image.png" alt="Debit Card" className="w-6 h-6 mr-2" />
                                    Debit Card
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="net-banking" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="net-banking" className="text-gray-700 flex items-center">
                                    <img src="/path/to/net-banking-image.png" alt="Net Banking" className="w-6 h-6 mr-2" />
                                    Net Banking
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="paypal" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="paypal" className="text-gray-700 flex items-center">
                                    <img src="/image/paypal_card.png" alt="PayPal" className="w-6 h-6 mr-2" />
                                    PayPal
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="google-pay" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="google-pay" className="text-gray-700 flex items-center">
                                    <img src="/path/to/google-pay-image.png" alt="Google Pay" className="w-6 h-6 mr-2" />
                                    Google Pay
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="phonepe" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="phonepe" className="text-gray-700 flex items-center">
                                    <img src="/path/to/phonepe-image.png" alt="PhonePe" className="w-6 h-6 mr-2" />
                                    PhonePe
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" name="payment-method" id="paytm" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                                <label htmlFor="paytm" className="text-gray-700 flex items-center">
                                    <img src="/path/to/paytm-image.png" alt="Paytm" className="w-6 h-6 mr-2" />
                                    Paytm
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Credit Card Information */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Credit Card Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="1234 5678 9101 1121" />
                            </div>
                            <div className="md:col-span-2 flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700 font-semibold mb-2">Expiration Date</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="MM/YY" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="123" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Button */}
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300">
                        Pay Now
                    </button>
                </form>
            </div>
        </main>
    );
};

export default PaymentPage;
