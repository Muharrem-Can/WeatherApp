import React, { useState, useEffect } from "react";
import Today from "../parts/Today";
import Week from "../parts/Week";
import { getHours, getToday } from "../api/Api";
function Home() {

    const [hoursData, setHours] = useState(null);
    const [todayData, setToday] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Çanakkale');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([getToday(city), getHours(city)])
            .then(([todayData, hoursData]) => {
                setToday(todayData);
                setHours(hoursData);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleCitySearch = async (event) => {
        event.preventDefault();
        if (!city) {
            return;
        }
        setIsLoading(true);
        setError(null);
        setCity(city)
        Promise.all([getToday(city), getHours(city)])
            .then(([todayData, hoursData]) => {
                setToday(todayData);
                setHours(hoursData);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }



    if (!todayData && !hoursData) return null

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <section className="card bg-dark w-100 text-white p-4 todayCard">
                        <div className="row">
                            <div className="col-lg-12">
                                <div class="input-group mb-3">
                                    <form className="w-100" onSubmit={handleCitySearch}>
                                        <input type="text" id="searchCity" value={city} onChange={(e) => setCity(e.target.value)} class="form-control bg-dark text-white border rounded-3 searchCity" placeholder="Search City" aria-describedby="search-city" />
                                        <button type="submit" className="bg-none border-0 searchButton"><i class="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {isLoading && <div>Loading...</div>}
                        {error && <div className="bg-danger p-2 rounded"> {error}</div>}
                        <Today todayData={todayData} city={city} />
                    </section>
                </div>
                <div className="col-lg-6">
                    <Week hoursData={hoursData} />
                </div>
            </div>
        </>
    )
}

export default Home