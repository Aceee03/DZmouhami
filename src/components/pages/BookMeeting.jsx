import React, { useState } from "react";

const BookMeeting = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            {!isSuccess ? (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                        Book an Appointment
                    </div>
                    <form class="py-4 px-6" action="" method="POST" onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="name">
                                Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Enter your name"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="Enter your email"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                Phone Number
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="tel" placeholder="Enter your phone number"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="date">
                                Date
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date" type="date" placeholder="Select a date"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="time">
                                Time
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="time" type="time" placeholder="Select a time"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="message">
                                Message
                            </label>
                            <textarea
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message" rows="4" placeholder="Enter any additional information"></textarea>
                        </div>
                        <div class="flex items-center justify-center mb-4">
                            <button
                                class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                type="submit">
                                Book Appointment
                            </button>
                        </div>

                    </form>
                </div>
            ) : (
                <div className="bg-green-200 text-green-800 text-center py-2 rounded">
                    Appointment booked successfully!
                </div>
            )}
        </div>
    );
};

export default BookMeeting;
