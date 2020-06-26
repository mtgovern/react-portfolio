import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import portfolio from "../../src/portfolio.json";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Row from "../components/Row";

class Portfolio extends Component {
    state = {
        portfolio
    };

    componentDidMount() {
        this.setState({ portfolio });
    }


    // Map over this.sate.friends and render a FriendCard component for eadh friend object
    render() {
        return (
            <Wrapper>
                <Title children="Bootcamp Portfolio" />
                <Row>
                    {this.state.portfolio.map(item => (
                        <PortfolioCard
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            assignment={item.assignmeent}
                            url={item.url} 
                        />
                    ))}
                </Row>
            </Wrapper>
        );
    }
}

export default Portfolio;
