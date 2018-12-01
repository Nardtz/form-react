import React, { Component } from "react";
import FooterSection from "./BottomSection/Footer";
import "./App.css";
import "./CssModule/normalize.css";
import "./CssModule/section.css";
import "./CssModule/Column.css";
import ColumnOne from "./Column/ColumnOne";
import ColumnTwo from "./Column/ColumnTwo";
import BottomSection from "./BottomSection/BottomSection";
import Tree from "./tree-colored.png";
import Logo from "./Assisted-Living-Logo.png";

class App extends Component {
  state = {
    formInputs: {
      careWho: "",
      lookingFor: "",
      email: "",
      clientName: "",
      phone: ""
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
        <section className="Section Header">
          <img src={Logo} className="Logo" />
        </section>
        <section className="Section Section--blue">
          <h1 className="topHead">Find Assisted Living Costs Near You</h1>
          <div className="column">
            <div className="maps column__sub">
              <img src={Tree} class="tree" />
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
                {this.state.showSecondFormFields === true ? (
                  <div>
                    <h6>
                      By submitting this form, you agree to
                      Assisted-living.com's{" "}
                      <a href="privacy-policy.html" target="_blank">
                        Privacy Policy
                      </a>
                      , <a href="#">Terms of Use</a>, and Agreement to be
                      Contacted by Telephone.
                    </h6>
                    <h5 className="back" onClick={this.toggleFormFields}>
                      BACK
                    </h5>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section>
          <BottomSection />
        </section>
        <section>
          <FooterSection />
        </section>
      </div>
    );
  }
}
export default App;
