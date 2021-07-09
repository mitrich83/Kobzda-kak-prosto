import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5

}

export function UncontrolledRating (props: RatingPropsType) {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/><button onClick={ ()=> {setValue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={ ()=> {setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={ ()=> {setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={ ()=> {setValue(5)}}>4</button>
            <Star selected={value > 4}/><button onClick={ ()=> {setValue(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    if (props.selected === true) {
        return <img width={'20px'} height={'20px'} src="https://image.pngaaa.com/870/50870-middle.png" />
    } else {
        return <img width={'20px'} height={'20px'} src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-star-icon-png-image_926157.jpg" />
    }
}
