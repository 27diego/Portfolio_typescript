import React from "react";
import "./More.scss";

import portrait from "../../images/me.jpg";

import Particles, { HoverMode } from "react-particles-js";
import { Why, Background, Future, Hobby, preLoad } from "./Content";

interface Props {
  main: boolean;
  setMain: React.Dispatch<React.SetStateAction<boolean>>;
}

interface State {
  activate: boolean;
  backArrow: string;
  component: number;
}

export class More extends React.Component<Props, State> {
  state = {
    activate: false,
    backArrow: "",
    component: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ activate: true });
    }, 1500);

    preLoad();
  }

  increment = () => {
    if (this.state.component === 4) {
      this.setState({ component: 0 });
    } else {
      this.setState((prevState) => ({ component: prevState.component + 1 }));
    }
  };
  decrement = () => {
    if (this.state.component === 0) {
      this.setState({ component: 4 });
    } else {
      this.setState((prevState) => ({ component: prevState.component - 1 }));
    }
  };

  first = () => (
    <React.Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: "#fff",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: HoverMode.grab,
              },
            },
          },
        }}
        style={{
          backgroundColor: "#090a0f",
          position: "absolute",
        }}
      />
      <div className="Container--More">
        <div className="main">
          <div
            className={`home home--${this.state.activate ? "show" : "hide"}`}
          >
            <div
              className="homeArrow__container"
              onMouseOver={(): void => this.setState({ backArrow: "back" })}
              onMouseOut={(): void => this.setState({ backArrow: "" })}
              onClick={(): void => this.props.setMain(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`homeArrow homeArrow--${this.state.backArrow}`}
              >
                <polyline
                  points="244 400 100 256 244 112"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "48px",
                  }}
                />
                <line
                  x1="120"
                  y1="256"
                  x2="412"
                  y2="256"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "48px",
                  }}
                />
              </svg>
            </div>
            <div className="home__title">Home</div>
          </div>
          <div
            className={`name__container name__container--${
              this.state.activate ? "load" : "initial"
            }`}
          >
            <h1 className="name">Diego Vega</h1>
          </div>

          <img
            className={`portrait portrait--${
              this.state.activate ? "show" : "hide"
            }`}
            src={portrait}
            alt="self portrait"
          />
        </div>
      </div>
    </React.Fragment>
  );

  renderComponents = () => {
    switch (this.state.component) {
      case 0:
        return this.first();
      case 1:
        return <Why />;
      case 2:
        return <Background />;
      case 3:
        return <Hobby />;
      case 4:
        return <Future />;
    }
  };

  render() {
    console.log(this.state.component);
    return (
      <React.Fragment>
        <div
          className={`controls controls--${
            this.state.activate ? "show" : "hide"
          }`}
        >
          <div
            onClick={this.decrement}
            className="controls__container controls__container--left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="controls--left"
            >
              <polyline
                points="244 400 100 256 244 112"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
            </svg>
          </div>
          <div
            onClick={this.increment}
            className="controls__container controls__container--right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="controls--right"
            >
              <polyline
                points="244 400 100 256 244 112"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
            </svg>
          </div>
        </div>
        {this.renderComponents()}
      </React.Fragment>
    );
  }
}
