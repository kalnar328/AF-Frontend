import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg3.jpg";

class ReserveTickets extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      route : undefined,
      time  : undefined,
      cost : undefined,
      tickets : undefined,
      error : undefined,
      rid:undefined,
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  getTicket = async(e) => {

    e.preventDefault();
    //e.preventDefault();

    const rid = e.target.elements.from.value;
    alert(rid);
  // const country = e.target.elements.country.value;
  const tickets = e.target.elements.numberOfSeats.value;

    const api_calls = await fetch('http://localhost:4000/trains/5cd6ca2e92e2403e8489fabd');
    const data = await api_calls.json();

    if(rid){
      console.log(data);
      this.setState({
        name : data.name,
        route : data.route,
        time  : data.time,
        cost : data.cost,
        tickets : tickets,
        error: ""
      });
    }else{
      this.setState({
        route : undefined,
        time  : undefined,
        cost : undefined,
        tickets : undefined,
        error : undefined,
        error: "Please enter  the value"
      });
     }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.getTicket}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Search your Train here</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="From"
                        id="from"
                        name="from"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: <InputAdornment position="end" />
                        }}
                      />
                      <CustomInput
                        labelText="To"
                        id="to"
                        name="to"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: <InputAdornment position="end" />
                        }}
                      />
                      <CustomInput
                        labelText="Number of seats"
                        id="numberOfSeats"
                        name="numberOfSeats"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: <InputAdornment position="end" />
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" size="lg">
                        Book Now
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(ReserveTickets);
