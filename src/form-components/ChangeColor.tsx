import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "purple"
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                    />
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                You color is {selectedColor}
            </div>
        </div>
    );
}
