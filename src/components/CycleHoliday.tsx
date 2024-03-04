import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "♥️" | "🎏" | "🎃" | "🪔" | "🎄"; // Add your favorite holiday emojis here

const holidaysByYear: Holiday[] = ["♥️", "🎏", "🎃", "🪔", "🎄"]; // Update with your favorite holidays
const holidaysByAlphabet: Holiday[] = ["🎄", "🪔", "🎏", "🎃", "♥️"]; // Update with your favorite holidays

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        holidaysByAlphabet[0] // Start with the first holiday alphabetically
    );

    const getNextHolidayAlphabetically = (): Holiday => {
        const currentIndex = holidaysByAlphabet.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByAlphabet.length;
        return holidaysByAlphabet[nextIndex];
    };

    const getNextHolidayByYear = (): Holiday => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        return holidaysByYear[nextIndex];
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={() => setCurrentHoliday(getNextHolidayByYear())}>
                Advance by Year
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday(getNextHolidayAlphabetically())
                }
            >
                Advance by Alphabet
            </Button>
        </div>
    );
}
