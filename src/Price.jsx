//import React from 'react'
function Price(props){
return(
<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.details.plan}</h5>
            <h6 className="card-price text-center">${props.details.month}<span>/month</span></h6>
            <hr />
            <ul className="fa-ul">
              {props.details.feature.map((num)=>{
                return <>
                <li className={num.mute ?"text-muted":''}><span className="fa-li"><i className={num.check ?"fas fa-times":"fas fa-check"}></i></span>{num.name}</li>
                </>
                
              })
              }
               </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      );
}
export default Price;