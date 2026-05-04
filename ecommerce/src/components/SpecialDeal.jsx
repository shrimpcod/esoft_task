import { useState, useEffect } from 'react'
import { FiClock, FiX, FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi';
import { Button } from './Button';

export const SpecialDeal = () => {
    const [timeLeft, setTimeLeft] = useState(3599)
    const [isRunning, setIsRunning] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1)
            }, 1000);
        }
        return () => clearInterval(timer)
    }, [isRunning, timeLeft])

    if (!isVisible) return null;
    return(
        <div className="relative flex flex-col bg-linear-to-b from-red-500 to-red-800 rounded-xl text-white p-5 shadow-md shadow-red-200">
            <div className="flex gap-3 items-center">
                <FiClock size={24} className='animate-pulse'/>
                <p className="text-lg font-bold">Special Deal!</p>
                <Button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2"
                >
                    <FiX />
                </Button>
            </div>
            <p className="mt-2 text-sm opacity-90 leading-relaxed">
                Register now to unlock exclusive offers and discou
            </p>
            <div className="w-full mt-4 flex flex-col gap-2">
                <div className='flex flex-col justify-between items-center border-t border-white/50 pt-4'>
                    <p className='text-xs uppercase tracking-wider opacity-80'>
                        {timeLeft > 0 ? "Offer expires in:" : "Offer status"}
                    </p>
                    <p className="font-mono font-bold text-lg uppercase">
                        {timeLeft > 0 ? formatTime(timeLeft) : "таймер истек"}
                    </p>
                </div>
                
                <div>
                    {timeLeft > 0 && (
                        <div className='flex justify-center gap-4'>
                            <Button
                                onClick={() => setIsRunning(!isRunning)}
                            >
                                {isRunning ? <FiPause /> : <FiPlay />}
                            </Button>
                            <Button
                                onClick={() => setTimeLeft(3599)}
                            >
                                <FiRefreshCw />
                            </Button>
                        </div>
                    )}
                </div>

                <div>
                    {timeLeft <= 0 && (
                        <Button
                            onClick={() => {setTimeLeft(3599); setIsRunning(true)}}
                            className="w-full bg-white text-red-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            RESTART
                        </Button>
                    )}
                </div>
            </div>  
        </div>
    )
}