import React, { Component } from 'react';
// import validation
// import mutation

class TransferForm extends Component {
 static defaultProps = {
   balance: '0.000',
 }

 constructor(props, context) {
   super(props, context);

   this.state = {
     amount: 0,
     emailAddress: '',
     memo: '',
   };
 }

 onChange(e) {
   const { name, pattern, value } = e.target;

   if (pattern && !(new RegExp(pattern).test(value))) {
     return;
   }

   this.setState({ [name]: value });
 }

 clearInputs() {
   this.setState({
     amount: '',
     emailAddress: '',
     memo: '',
   });
 }

 render() {
   const { amount, emailAddress, memo } = this.state;
   const { balance } = this.props;
   const onChange = this.onChange.bind(this);
   const clearInputs = this.clearInputs.bind(this);

   return (
     <form>
       <fieldset className="form-group">
         <label htmlFor="to">To</label>
         <div className="input-prefix">
           <input
             aria-describedby="to"
             className="form-control form-control-lg prefix"
             id="to"
             name="emailAddress"
             onChange={onChange}
             type="text"
             value={emailAddress}
           />
         </div>
       </fieldset>

       <fieldset className="form-group">
         <div>
           <small className="form-text text-muted"><a>Balance: {balance} EOS</a></small>
           <label htmlFor="amount">Amount</label>
           <input
             aria-describedby="amount"
             className="form-control form-control-lg"
             id="amount"
             name="amount"
             onChange={onChange}
             pattern="^[0-9.]*$"
             required
             type="text"
             value={amount}
           />
         </div>
       </fieldset>

       <fieldset className="form-group">
         <label htmlFor="memo">Memo</label>
         <input
           aria-describedby="emailHelp"
           className="form-control form-control-lg"
           id="memo"
           name="memo"
           onChange={onChange}
           type="text"
           value={memo}
         />
       </fieldset>

       <div className="row col-12 no-gutters p-0">
         <div className="col-sm-auto col-6 pl-0 pr-2">
           <button
             className="btn btn-primary btn-lg btn-block"
             type="submit"
           >Submit
           </button>
         </div>
         <div className="col-sm-auto col-6 pl-2 pr-0">
           <button
             className="btn btn-secondary btn-lg btn-block"
             onClick={clearInputs}
             type="button"
           >Clear
           </button>
         </div>
       </div>
     </form>
   );
 }
}

export default TransferForm;
