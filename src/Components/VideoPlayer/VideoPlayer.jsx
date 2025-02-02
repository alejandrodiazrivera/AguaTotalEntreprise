import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ playState, setPlayState, videoUrl }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setPlayState(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setPlayState]);

    return (
        <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <ReactPlayer
                url={videoUrl}
                playing={playState}
                controls
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;