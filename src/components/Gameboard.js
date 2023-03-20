import Case from "./Case";
import { caseValues } from "../casevalues";
import React, { useState, useEffect } from "react";

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex = undefined;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function valuesToCaseState() {
    const cases = caseValues.map((value) => {
        return {
            value: value,
            isOpen: false,
            isSelected: false,
        };
    });
    shuffle(cases);
    return cases;
}

const initialCaseState = valuesToCaseState();

function Gameboard() {
    const [cases, setCases] = useState(initialCaseState);

    return (
        <div className="Gameboard">
            <div>
                <header>Deal or No Deal</header>
                <p>Selected Case: </p>
            </div>
            <div id="Boardwrapper">
                <div id="cases">
                    {cases.map((currCase, index) => {
                        return (
                            <Case
                                key={index}
                                index={index}
                                value={currCase.value}
                                isOpen={currCase.isOpen}
                                isSelected={currCase.isSelected}
                            />
                        );
                    })}
                </div>
                <div id="remaining-values">
                    <p>This is for the values list or remaining</p>
                </div>
            </div>
        </div>
    );
}

export default Gameboard;
