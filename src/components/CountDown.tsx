import React, { FC, useEffect, useState } from 'react';

interface TimerProps {
    Endate: string;
}

const CountDown: FC<TimerProps> = (props) => {
    const { Endate } = props;
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const deadline: string = Endate;

    useEffect(() => {
        const getTime = () => {
            const time: number = Date.parse(deadline) - Date.now();

            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        };

        // @ts-ignore
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    return (
        <>
            {seconds < 0 ? (
                <p className='text-white text-[20px]'>Offer Not Available</p>
            ) : (
                <div className='text-[17px]  flex justify-center items-center pt-2'>
                    <div className='rounded-lg mr-4  p-1  text-[#6B31DF] bg-white flex justify-center items-center'>
                        <p id='day'>{days < 10 ? days : days}</p>
                        <span className='text'>d</span>
                    </div>
                    <div className='rounded-lg mr-4 p-1  text-[#6B31DF] bg-white  flex justify-center items-center'>
                        <p id='hour'>{hours < 10 ? hours : hours}</p>
                        <span className='text'>h</span>
                    </div>
                    <div className='rounded-lg mr-4  p-1 text-[#6B31DF] bg-white flex justify-center items-center'>
                        <p id='minute'>{minutes < 10 ? minutes : minutes}</p>
                        <span className='text'>m</span>
                    </div>
                    <div className='rounded-lg flex p-1  text-[#6B31DF] bg-white  justify-center items-center'>
                        <p id='second'>{seconds < 10 ? seconds : seconds}</p>
                        <span className='text'>s</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default CountDown;