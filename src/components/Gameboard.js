import Case from "./Case";
import { caseValues } from "../caseValues";
import React, { useState, useEffect } from "react";
import { ValueDisplay } from "./ValueDisplay";

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

// // code for manually sorting the values of the cases array (above)
// // in order to use it, you'll need to copy the initialCaseState (an array)
// // so that it doesn't mess with the original initialCaseState (which is used in the gameboard)
// // with a copy of the initialCaseState array, then you can use it in the ValueDisplay component
// initialCaseState.sort((left, right) => {
//     return left.value - right.value;
// })

function Gameboard() {
    const [cases, setCases] = useState(initialCaseState);

    const updateCase = (updateIndex, newUpdate) => {
        const newState = cases.map((currCase, index) => {
          if (index === updateIndex) {
            // currCase = { value: 1, isOpen: false, isSelected: false}
            // newUpdate = { isOpen: true }
            // the ...newUpdate spread will override the isOpen property from currCase spread
            return {...currCase, ...newUpdate};
          }
          return currCase;
        });

        setCases(newState);
    };

    const openCase = (index) => {
        updateCase(index, {isOpen: true});
    }

    const selectCase = (index) => {
        updateCase(index, {isSelected: true});
    }

    return (
        <div className="gameboard">
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
                                onClick={openCase}
                            />
                        );
                    })}
                </div>
                <div id="remaining-values">
                    <p>Remaining Values</p>
                    <div className="remaining-values-list">
                        {cases.map((currCase, index) => {
                            return (
                                <ValueDisplay
                                    key={index}
                                    value={currCase.value}
                                    isOpen={currCase.isOpen}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gameboard;
