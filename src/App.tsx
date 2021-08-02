import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion, AccordionBody} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import {
    GetValueOfUncontrolledInput,
    TrackValueOfUncontrolledInput
} from './components/UncontrolledInput/UncontrolledInput';
import {ControlledInput} from './components/ControlledInput/ControlledInput';
import {ControlledSelect} from './components/ControlledSelect/ControlledSelect';
import {ControlledCheckBox} from './components/ControlledCheckBox/ControlledCheckBox';
import {log} from 'util';
import {Example} from './components/ReactMemo/ReactMemo';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const onClickCallback = () => {
        console.log('some item clicked')
    }
    const [value, setValue] = useState(null)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
{/*            Article 1

            <Rating value={ratingValue} onClick={setRatingValue}/>
            Article 2
            <UncontrolledRating/>*/}
            Article 3
            <UncontrolledAccordion titleValue={'Menu'}/>
{/*
            Article 4
            <Accordion titleValue={'Users'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Artem', value: 3},
                           {title: 'Viktor', value: 4}
                       ]}
                       onClickItem={onClickCallback}
            />

            Article 5
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            Article 6
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            Article 7
            <TrackValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInput/>

            <div>Article 8</div>
            <ControlledInput/>
   <ControlledSelect value={null}
                        items={[
                            {id: 1, option: 'Moscow'},
                            {id: 2, option: 'Minsk'},
                            {id: 3, option: 'Kiev'},
                            {id: 4, option: 'Pushkino'}
                        ]}
                        onChange={setValue}
        />
            <ControlledCheckBox/>
*/}

<Example/>
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
