import { useEffect, useState } from "react";

export const appName = () => {
    return 'Cylare Bladespace';
}

export const DateNow = () => {
    const [currentDate, setCurrentDate] = useState(getCurrentDate());

    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentDate();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getCurrentDate() {
        const now = new Date();
        const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        };
        return now.toLocaleString('en-US', options);
    }

    return currentDate;
}

export const timeNow = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function getCurrentTime() {
        const now = new Date();
        const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
        }
        return now.toLocaleString('id-ID', options).split('.').join(':');
    }

    return currentTime;
}