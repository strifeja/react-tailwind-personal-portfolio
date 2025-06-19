import { useEffect, useState } from "react";


export const CloudBackground = () => {
    const [clouds, setClouds] = useState([]);
    const [movingClouds, setMovingClouds] = useState([]);
    const [movingCloudsLeft, setMovingCloudsLeft] = useState([]);

    useEffect(() => {
        generateClouds();
        generateMovingClouds();
        generateMovingCloudsLeft();

        const handleResize = () => {
            generateClouds();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateClouds = () => {
        const newClouds = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            size: Math.random() * 200 + 100,
            top: Math.random() * 60,
            left: Math.random() * 110 - 10,
            duration: Math.random() * 40 + 30,
        }));
        setClouds(newClouds);
    };

    const generateMovingClouds = () => {
        const numberOfMovingClouds = 4;
        const newMovingClouds = [];

        for (let i = 0; i < numberOfMovingClouds; i++) {
            newMovingClouds.push({
                id: i,
                size: Math.random() * 300 + 100,
                top: Math.random() * 100,
                left: 0,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 100 + 35,
            });
        }


        setMovingClouds(newMovingClouds);
    };

    const generateMovingCloudsLeft = () => {
        const numberOfMovingClouds = 4;
        const newMovingClouds = [];

        for (let i = 0; i < numberOfMovingClouds; i++) {
            newMovingClouds.push({
                id: i,
                size: Math.random() * 300 + 100,
                top: Math.random() * 100,
                left: 0,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 100 + 35,
            });
        }


        setMovingCloudsLeft(newMovingClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {clouds.map((cloud) => (
                <div
                    key={cloud.id}
                    className="cloud"
                    style={{
                        width: cloud.size + "px",
                        height: cloud.size / 2 + "px",
                        top: cloud.top + "%",
                        left: cloud.left + "%",
                        animationDuration: cloud.animationDuration + "s",
                    }}
                >

                    {Array.from({ length: Math.floor(Math.random() * 3) + 3 }).map((_, i) => {
                        const puffSize = Math.random() * 0.9 + 0.9; // 0.6x to 1.2x
                        const offsetX = Math.random() * 100 - 50; // -50 to +50%
                        const offsetY = Math.random() * 20 - 10;  // slight vertical offset
                        return (
                            <div
                                key={i}
                                className="cloud-puff"
                                style={{
                                    width: `${puffSize * 40}px`,
                                    height: `${puffSize * 30}px`,
                                    left: `${50 + offsetX}%`,
                                    top: `${50 + offsetY}%`,
                                    transform: `translate(-50%, -50%)`,
                                }}
                            />
                        );
                    })}
                </div>
            ))}

            {movingClouds.map((movingCloud) => (
                <div
                    key={movingCloud.id}
                    className="movingCloud animate-movingcloud"
                    style={{
                        width: movingCloud.size + "px",
                        height: movingCloud.size / 2 + "px",
                        left: movingCloud.left + "%",
                        top: movingCloud.top + "%",
                        animationDelay: movingCloud.delay,
                        animationDuration: movingCloud.animationDuration + "s",
                    }}
                />
            ))}

            {movingCloudsLeft.map((movingCloudsLeft) => (
                <div
                    key={movingCloudsLeft.id}
                    className="movingCloudLeft animate-movingCloudLeft"
                    style={{
                        width: movingCloudsLeft.size + "px",
                        height: movingCloudsLeft.size / 2 + "px",
                        left: movingCloudsLeft.left + "%",
                        top: movingCloudsLeft.top + "%",
                        animationDelay: movingCloudsLeft.delay,
                        animationDuration: movingCloudsLeft.animationDuration + "s",
                    }}
                />
            ))}

        </div>
    );
};