import React from "react";
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, TextField, Button} from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import useStyles from "./styles";
import { useState } from "react";
import axios from "axios";




function App(){
  const classes = useStyles();

  const [activateButton, setActivateButton] = useState(true)
  
  const [card, setCard] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    amount: ""
  })



  function handleChange(e){
    const { id, value } = e.target;
    setCard((prevValue)=>{
      return {
        ...prevValue,
        [id]: value
      };
    });

    const {cardNumber, expDate, cvv, amount} = card;
    if (cardNumber !== "" && expDate !== "" && cvv !== "" && amount !==""){
      setActivateButton(false)
    }

    
  }

  function handleClick () {

    console.log(card) //Request is shown in the browser console
    axios.post("http://localhost:5000/api", card)
    .then(res => console.log(res.data)); //Response is shown in the browser console
    setCard({
      cardNumber: "",
      expDate: "",
      cvv: "",
      amount: ""
    });
    setActivateButton(true)
  }
    return (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
                <ShoppingCart />
                <Typography variant="h6">
                    Cheapbuys
                </Typography>
            </Toolbar>
          </AppBar>
          <main
            style={{      
              color: "white",
              background: "linear-gradient(to right top, #3aafa9, #def2f1)"
            }}
          >
              <div className={classes.container}>
                  <Container maxWidth="sm" className={classes.formGrid}>
                    <Typography variant="h4" align="center" color="primary" gutterBottom>
                      Online Payment
                    </Typography>
                    <form>
                    <Grid container spacing={3} justifyContent="center" className={classes.textField}>
 
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          type="number"
                          onChange={handleChange}
                          id="cardNumber"
                          label="Card number"
                          fullWidth
                          autoComplete="cc-number"
                          variant="standard"
                          value={card.cardNumber}
                          onInput = {(e) =>{
                            e.target.value = (e.target.value).toString().slice(0,17)
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          onChange={handleChange}
                          id="expDate"
                          label="Expiry date"
                          fullWidth
                          autoComplete="cc-exp"
                          variant="standard"
                          value={card.expDate}
                          helperText="MM/YYYY"
                          inputProps={{minLength:7, maxLength:7}}
                          // error={card.expDate.length !== 7}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          type="number"
                          onChange={handleChange}
                          id="cvv"
                          label="CVV"
                          helperText="Last three digits on signature strip"
                          fullWidth
                          autoComplete="cc-csc"
                          variant="standard"
                          value={card.cvv}
                          onInput = {(e) =>{
                            e.target.value = (e.target.value).toString().slice(0,3)
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} >
                        <TextField
                          required
                          type="number"
                          onChange={handleChange}
                          id="amount"
                          label="Amount"
                          fullWidth
                          autoComplete="cc-amount"
                          variant="standard"
                          value={card.amount}
                          // error={card.cardName === ""}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.button}>
                        <Button variant="contained" color="primary" size="medium" onClick={handleClick} disabled={activateButton}>
                          Pay
                        </Button> 
                      </Grid>

                    </Grid>
                    </form>
                  </Container>
              </div>
          </main>
        </>
    )
}




export default App;