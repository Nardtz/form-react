import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./App.css";
import "./CssModule/normalize.css";
import "./CssModule/section.css";
import "./CssModule/Column.css";
import ColumnOne from "./Column/ColumnOne";
import ColumnTwo from "./Column/ColumnTwo";
import BottomSection from "./BottomSection/BottomSection";
class App extends Component {
  state = {
    formInputs: {
      careWho: "",
      lookingFor: "Lynard",
      email: "cruzial@gmail.com",
      clientName: "New client",
      phone: "0949545445"
    },
    showSecondFormFields: false
  };

  toggleFormFields = () => {
    const doesShow = this.state.showSecondFormFields;
    this.setState({ showSecondFormFields: !doesShow });
  };

  render() {
    return (
      <div>
        <section className="Section">
          <h1 className="logo">Your Logo</h1>
        </section>
        <section className="Section Section--blue">
          <h1 className="topHead">
            Find Assisted Living Costs Near undefined, undefined
          </h1>
          <div className="column">
            <div className="maps column__sub">
              <img src="https://www.caringforaparent.com/assets/sem_pages/costs/may2013_tea-99f122ce0400d5eed91eb2db0b86c710.png" />
            </div>
            <div className="form column__sub">
              <form>
                {this.state.showSecondFormFields === false ? (
                  <ColumnOne
                    where={this.state.formInputs.lookingFor}
                    email={this.state.formInputs.email}
                  />
                ) : (
                  <ColumnTwo />
                )}
              </form>
              <div class="column__sub_div">
                <button
                  value="Get Started"
                  className="btn"
                  onClick={this.toggleFormFields}
                >
                  {this.state.showSecondFormFields === false
                    ? "Get Started"
                    : "Request Information"}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BottomSection />
        </section>
      </div>
    );
  }
}
export default App;
