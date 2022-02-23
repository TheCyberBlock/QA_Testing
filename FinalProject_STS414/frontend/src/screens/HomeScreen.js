import React from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';


export default class HomeScreen extends React.Component {

    componentDidMount() {
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else {
                localStorage.removeItem('firstLoad');
            }
        }
    }

    render() {
        return (
            <div id="HomeScreen">
                <HeroSection />
                <Cards />
            </div>
        )
    }

}