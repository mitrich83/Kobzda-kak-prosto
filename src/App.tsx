import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";
import OnOff from './components/Accordion/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/Accordion';
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';


function App() {
    console.log('App rendering')
    return (
        <div className={'App'}>

{/*            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Classic"} collapsed={true}/>
            <Accordion titleValue={"Fancy"} collapsed={false}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            Article 3
           <OnOff />
            {/*<OnOff />*/}
            Article 4
            <UncontrolledAccordion titleValue={"Classic"}/>
           {/* <UncontrolledAccordion titleValue={"Fancy"}/>*/}

<UncontrolledRating />


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>

}

export default App;
