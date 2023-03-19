import { FC } from 'react';
import { UseControllerReturn } from 'react-hook-form';

interface FFInputProps {
  field: UseControllerReturn['field'];
  id: string;
  labelText: NonNullable<React.ReactNode> | string;
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
  required = false,
  labelText,
  ...rest
}) => (
  <div className="form_row">
    <label htmlFor="id">
      <span className={required ? 'red_star' : ''}>{labelText}</span>
    </label>
    <input
      id={id}
      type={type}
      {...rest}
      value={field.value}
      onChange={field.onChange}
      autoComplete="off"
    />
    {invalid && (
      <label htmlFor="id" className="input_notification">
        <p>{invalidText}</p>
      </label>
    )}
  </div>
);
