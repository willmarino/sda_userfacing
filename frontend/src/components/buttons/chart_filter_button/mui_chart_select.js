import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const MuiChartFilterButton = (props) => {
  const [ buttonVal, setButtonVal ] = React.useState(props.curOption);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 120,
      height: 30
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const handleChange = (e) => {
    debugger;
    setButtonVal(e.target.value);
    props.changeFunc(e.target.value);
  }
  const selectOptions = props.options.map((op) => {
    return <MenuItem value={op} key={op}>{op}</MenuItem>
  })
  return <FormControl color="primary" variant="outlined" className={classes.formControl}>
      <InputLabel id="algo-label">{props.label}</InputLabel>
      <Select labelId="algo-label" id="algo-select" value={buttonVal} onChange={handleChange} label={props.label}>
        {selectOptions}
      </Select>
    </FormControl>
}

export default MuiChartFilterButton;