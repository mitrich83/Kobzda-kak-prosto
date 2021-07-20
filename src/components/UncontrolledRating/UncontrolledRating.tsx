import React, {useState} from 'react';
import {Star} from '../Rating/Star/Star'

export type RType = 0 | 1 | 2 | 3 | 4 | 5


export function UncontrolledRating() {

    let [value, setValue] = useState<RType>(0)

    return (
        <div>
            <Star value={1}
                  selected={value > 0}
                  callback={() => {
                      setValue(1);
                  }}
            />
            <Star value={2}
                  selected={value > 1}
                  callback={() => {
                      setValue(2);
                  }}/>
            <Star value={3}
                  selected={value > 2}
                  callback={() => {
                      setValue(3);
                  }}/>
            <Star value={4}
                  selected={value > 3}
                  callback={() => {
                      setValue(4);
                  }}/>
            <Star value={5}
                  selected={value > 4}
                  callback={() => {
                      setValue(5);
                  }}/>
        </div>
    )
}
