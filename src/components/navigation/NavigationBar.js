import React from 'react';
import './NavigationBar.scss';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="nav">
                <a href="#">Log in</a>
            </div>
        )
    }
}

export default NavigationBar;