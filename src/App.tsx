import React, {useState} from 'react';
import './App.css';
import OnOff from './components/Accordion/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from './Rating/Rating';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            Article 2
            <OnOff/>
            Article 3
            <UncontrolledAccordion titleValue={'Menu'}/>

            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>

}

export default App;
