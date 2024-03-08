import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
            />
            <button onClick={handleUseAttempts} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
