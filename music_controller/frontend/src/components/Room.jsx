import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Room = () => {
    // useParams hook to access the room code from the URL
    const { roomCode } = useParams();

    // State to hold room details
    const [roomDetails, setRoomDetails] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });

    // Fetch room details when the component mounts or roomCode changes
    useEffect(() => {
        if (!roomCode) {
            console.error('Room code is not defined.');
            return;
        }
    
        axios.get(`${import.meta.env.VITE_API_URL}/api/room/${roomCode}`, {
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {
            console.log(response.data);
            setRoomDetails({
                votesToSkip: response.data.votes_to_skip,
                guestCanPause: response.data.guest_can_pause,
                isHost: response.data.is_host,
            });
        })
        .catch((error) => {
            console.error('Error fetching room:', error);
        });
    }, [roomCode]);

    // Render room details
    return (
        <div>
            <h3>Room Code: {roomCode}</h3>
            <p>Votes to Skip: {roomDetails.votesToSkip}</p>
            <p>Guest Can Pause: {roomDetails.guestCanPause ? 'Yes' : 'No'}</p>
            <p>Host: {roomDetails.isHost ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default Room;