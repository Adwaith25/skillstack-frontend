function InputFeild(props){
  return(
     <div className="form-group">
        <label>{props.placeholder}</label>
        <input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        
      </div>
  ); 
}
export default InputFeild