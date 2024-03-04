import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, setLeftDie] = useState<number>(1);
    const [rightdie, setRightDie] = useState<number>(2);
    const [result, setResult] = useState<string | null>(null);

    const rollLeft = () => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
        updateResult(newLeftDie, rightdie);
    };

    const rollRight = () => {
        const newRightDie = d6();
        setRightDie(newRightDie);
        updateResult(leftdie, newRightDie);
    };

    const updateResult = (left: number, right: number) => {
        if (left === right) {
            setResult(left !== 1 ? "Win!" : "Lose");
        } else {
            setResult("Lose");
        }
    };

    return (
        <div>
            <div>Two Dice</div>
            <span data-testid="leftdie">{leftdie} </span>
            <span data-testid="rightdie"> {rightdie}</span>
            <p></p>

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            {result && <div>{result}</div>}
        </div>
    );
}
