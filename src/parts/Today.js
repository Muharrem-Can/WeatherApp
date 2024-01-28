import React, { useEffect, useState } from "react";
import { getToday } from "../api/Api";

export const Hours = ({ hoursData }) => {
    return (
        <>
            <table className="text-white table table-dark">
                <tbody>
                    {hoursData.list.map((hour, index) => {
                        const dateObject = new Date(hour.dt_txt);
                        const formattedDate = dateObject.toLocaleString();
                        return (<tr key={index}>
                            <td><img src={'https://openweathermap.org/img/wn/' + hour.weather[0].icon + '@2x.png'} width={50} /></td>
                            <td>{hour.main.temp} °C</td>
                            <td style={{ textTransform: 'capitalize' }}>{hour.weather[0].description}</td>
                            <td>{formattedDate}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}


function Today({ todayData }) {

    return (
        <>
            <span class="badge rounded-pill text-bg-light currentCity"><i class="bi bi-geo-alt"></i> {todayData.name}</span>
            <h4 className="mt-2">Weather <span className="small">(Now)</span></h4>
            <div className="row align-items-center align-items-lg-end">
                <div className="col-lg-6 col-6">
                    <h2 className="currentTemp">{todayData.main.temp} °C</h2>
                    <h3 className="feelsLike h5 small">Feels like {todayData.main.feels_like} °C</h3>
                </div>
                <div className="col-lg-6 col-6 text-end">
                    <img className="weatherIcon" src={'https://openweathermap.org/img/wn/' + todayData.weather[0].icon + '@2x.png'} width={150} />
                    <div className="d-flex justify-content-around mt-3 d-none d-lg-flex">
                        <span className="small">Max: {todayData.main.temp_max} °C</span>
                        <span className="small">Min: {todayData.main.temp_min} °C</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Today