import React from "react";

type IDateInput = React.ComponentProps<'input'> & {
  //todas as propriedades de input, extende outras propriedades que podemos inserir
  label: string;
}

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...props} />
      {/* ...props todas as propriedades de input */}
    </div>
  );
};

export default DateInput;