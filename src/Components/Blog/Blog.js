import React from 'react';

const Blog = () => {
    return (
        <div className="mt-[76px] container mx-auto">
            <div className="questionOne my-10">
                <h1 className='text-xl pt-7 pb-5'>1) What is the difference Authorization and Authentication?</h1>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Authentication
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Authorization
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    What does it do?.
                                </td>
                                <td className="px-6 py-4">
                                    Verifies credentials .

                                </td>
                                <td className="px-6 py-4">
                                    Grants or denies permissions.

                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    How does it work?
                                </td>
                                <td className="px-6 py-4">
                                    Through passwords, biometrics, one-time pins, or apps.

                                </td>
                                <td className="px-6 py-4">
                                    Through settings maintained by security teams.

                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    Is it visible to the user?
                                </td>
                                <td className="px-6 py-4">
                                    Yes.

                                </td>
                                <td className="px-6 py-4">
                                    No.

                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    It is changeable by the user?.
                                </td>
                                <td className="px-6 py-4">
                                    Partialy.
                                </td>
                                <td className="px-6 py-4">
                                    No.
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    How does data move?
                                </td>
                                <td className="px-6 py-4">
                                    Through ID tokens.
                                </td>
                                <td className="px-6 py-4">
                                    Through access tokens.
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="questionTwo">
                <h1 className='text-xl pt-7 pb-5'>2) Why are you using Firebase? What other options do you have to impliment authentication?</h1>
                <p className='text-gray-600 mb-4'>Firebase is used for authentication to maintain the user login system for the website. It can be done by raw code but it is time consume and not much secure. As firebase is a product of GOOGLE inc. It is much secure and easy to use so I am using firebase</p>
                <h1>There are many other company to implement authentication or alternative of firebase they are :-</h1>
                <ul className='list-disc ml-5'>
                    <li>OneLogin</li>
                    <li>Okta</li>
                    <li>JumpCloud</li>
                    <li>Couchbase</li>
                    <li>Centrify</li>
                    <li>Microsoft Azure</li>
                </ul>
            </div>
            <div className="questionThree my-10">
                <h1 className='text-xl pt-7 pb-5'> 3) What other services does firebase provide other than authentication?</h1>
                <ul className='list-disc ml-5'>
                    <li>Cloud Functions.</li>
                    <li>Cloud Firestore.</li>
                    <li>Hosting..</li>
                    <li>Cloud Storage..</li>
                    <li>Google Analytics..</li>
                    <li>Predictions..</li>
                    <li>Cloud Messaging.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;