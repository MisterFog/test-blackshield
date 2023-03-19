import { FC } from 'react';
import { UseControllerReturn } from 'react-hook-form';

interface FFInputProps {
  field: UseControllerReturn['field'];
  id: string;
  labelText: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  invalidText?: string;
}

export const FFInput: FC<FFInputProps> = ({
  field,
  id,
  type,
  invalid,
  invalidText,
  labelText,
  ...rest
}) => (
  <div className="form_row">
    <input
      id={id}
      type={type}
      {...rest}
      value={field.value}
      onChange={field.onChange}
      autoComplete="off"
      placeholder={labelText}
    />
    {invalid && (
      <label htmlFor="id" className="input_notification">
        <p>{invalidText}</p>
      </label>
    )}
  </div>
);
