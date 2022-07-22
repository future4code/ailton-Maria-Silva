import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ListTrips from './ListTripsPage';
import ApplicationForm from './ApplicationFormPage';
import LoginPage from './LoginPage';
import CreateTrip from './CreateTripPage';
import TripDetails from './TripDetailsPage';
import AdmHome from './AdminHomePage';


const RouterX = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/list-trips" element={<ListTrips />} />
                    <Route index element={<HomePage />} />
                    <Route path="/app-form" element={<ApplicationForm />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/create-trip" element={<CreateTrip />} />
                    <Route path="/trip-details" element={<TripDetails />} />
                    <Route path="/admin-home-page" element={<AdmHome />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
};

export default RouterX;