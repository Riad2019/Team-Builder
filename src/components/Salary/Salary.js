import React from 'react';

const Salary = (props) => {
    const cart = props.cart;
     let totalSalary = 0;
     for (let i = 0; i< cart.length; i++) {
       const profile = cart[i];
       totalSalary = totalSalary + profile.yearly_salary;
        
     }
     const formatNumber =num=> {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    
    return (
        <div>
            <h4>Your Added Team Member : {cart.length} </h4>
            <p>Your Team Members Total Yearly salary : ${formatNumber(totalSalary)}</p>

        </div>
    );
};

export default Salary;