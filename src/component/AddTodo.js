import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      due: null
    };
  }

  handleDate = (event) => {
    this.setState({
      due: new Date(event).toLocaleDateString()
    });
  };


  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: Date().toLocaleString('en-US')
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date: "",
        due: null
      });
    }
  };
  render() {
    return (
      
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>         
          <DesktopDatePicker
            id="new-item-date"
            label="Due Date"
            value={this.state.due}
            onChange={this.handleDate}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;