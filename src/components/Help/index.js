import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  root: {
    
  },
}))
const Help = () => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Need Help with NeuralPy?
      </Typography>
      <Typography>Here are the following things you can do</Typography>
      <ul>
        <li>
          <Typography>
            Join our discord server by clicking{" "}
            <a href="https://discord.gg/ptGEQuy">here</a>
          </Typography>
        </li>
        <li>
          <Typography>Raise an issue on github</Typography>
        </li>
        <li>
          <Typography>
            Email Abhishek Chatterjee (abhishek.chatterjee97@protonmail.com)
          </Typography>
        </li>
      </ul>
    </div>
  )
}

export default Help
