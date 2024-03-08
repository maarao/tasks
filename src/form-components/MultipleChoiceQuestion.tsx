import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: Readonly<{
    options: readonly string[];
    expectedAnswer: string;
}>): JSX.Element {
    const [selectedOptions, setSelectedOptions] = useState([options[0]]);
    const isCorrect = selectedOptions[0] === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form>
                <Form.Group controlId="formMultipleChoice">
                    <Form.Label>Select your answer:</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => setSelectedOptions([e.target.value])}
                        value={selectedOptions[0]}
                    >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>

            <div>
                {isCorrect ? (
                    <span style={{ color: "green" }}>✔️ Correct!</span>
                ) : (
                    <span style={{ color: "red" }}>❌ Incorrect!</span>
                )}
            </div>
        </div>
    );
}
