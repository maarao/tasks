import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Reveal Answer</Button>
            {isVisible ? <div>42</div> : null}
        </div>
    );
}
