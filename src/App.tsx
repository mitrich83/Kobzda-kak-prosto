import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import OnOff from './components/OnOff/OnOff';



function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn ] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            Article 2
            <UncontrolledRating/>
            Article 3
            <UncontrolledAccordion titleValue={'Users'}/>
            Article 4
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />
            Article 5
            <OnOff on={switchOn} onChange={ (on)=> {setSwitchOn(on)}}/>
            Article 6
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

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
