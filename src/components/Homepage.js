import React from 'react';
import {connect} from 'react-redux';
import {fetchBattlegroundsCards, getAccessToken, changeTab} from "../actions";

class HomePage extends React.Component{

    componentDidMount = async() => {
        if(!this.props.accessToken || typeof this.props.accessToken != 'string')
            await this.props.getAccessToken();
        if(!this.props.cards || Object.entries(this.props.cards).length === 0)
            await this.props.fetchBattlegroundsCards();
    };

    onTabClick = (tab) => {
        this.props.changeTab(tab);

    };

    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="active"><a data-toggle="tab" href="#home" onClick={this.onTabClick('Heroes')}>Heroes</a></li>
                        <li><a data-toggle="tab" href="#tier1" onClick={this.onTabClick('Tier 1')}>Tier 1</a></li>
                        <li><a data-toggle="tab" href="#tier2" onClick={this.onTabClick('Tier 2')}>Tier 2</a></li>
                        <li><a data-toggle="tab" href="#tier3" onClick={this.onTabClick('Tier 3')}>Tier 3</a></li>
                        <li><a data-toggle="tab" href="#tier4" onClick={this.onTabClick('Tier 4')}>Tier 4</a></li>
                        <li><a data-toggle="tab" href="#tier5" onClick={this.onTabClick('Tier 5')}>Tier 5</a></li>
                        <li><a data-toggle="tab" href="#tier6" onClick={this.onTabClick('Tier 6')}>Tier 6</a></li>
                    </ul>
                </nav>
                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                        <h3>HEROES</h3>
                    </div>
                    <div id="tier1" className="tab-pane fade">
                        <h3>Tier 1</h3>
                    </div>
                    <div id="tier2" className="tab-pane fade">
                        <h3>Tier 2</h3>
                    </div>
                    <div id="tier3" className="tab-pane fade">
                        <h3>Tier 3</h3>
                    </div>
                    <div id="tier4" className="tab-pane fade">
                        <h3>Tier 4</h3>
                    </div>
                    <div id="tier5" className="tab-pane fade">
                        <h3>Tier 5</h3>
                    </div>
                    <div id="tier6" className="tab-pane fade">
                        <h3>Tier 6</h3>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken,
        cards : Object.values(state.cards),
        currentTab: state.currentTab
    }
};

export default connect(mapStateToProps, {getAccessToken, fetchBattlegroundsCards, changeTab})(HomePage);