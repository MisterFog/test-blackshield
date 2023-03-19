import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useMemo } from 'react';
import { Controller, ControllerRenderProps, FieldValues, useForm } from 'react-hook-form';
import { FFInput } from '../../../components/form-fields/input/FFInput';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { save } from '../../../store/auth/authAction';

export type Entity = {
  id: string;
  type: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
};

const NewForm: FC<{ config: Entity[] }> = ({ config }) => {
  const defaultValues = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const objSchema = config.reduce((obj: any, item) => {
    switch (item.type) {
      case 'inputPassword':
        obj[item.id] = item.required
          ? yup
              .string()
              .required('Required field, must not be empty')
              .min(6, 'Password must be at least 6 characters long')
          : yup.string().notRequired();
        break;
      case 'inputEmail':
        obj[item.id] = item.required
          ? yup.string().email('Invalid email format').required('Required field, must not be empty')
          : yup.string().email('Invalid email format');
        break;
      default:
        obj[item.id] = item.required
          ? yup.string().required('Required field, must not be empty')
          : yup.string().notRequired();
        break;
    }
    return obj;
  }, {});

  const schema = yup.object().shape(objSchema);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (values: any) => {
    dispatch(save(values));
    reset(defaultValues);
  };

  const inputType = (type: string) => {
    switch (type) {
      case 'inputPassword':
        return 'password';
      case 'inputEmail':
        return 'email';
      default:
        return 'text';
    }
  };

  return (
    <form id="new_form" onSubmit={handleSubmit(onSubmitHandler)}>
      {config.map((item: Entity) => (
        <Controller
          key={item.id}
          control={control}
          name={item.id}
          render={(props) => (
            <FFInput
              field={props.field as unknown as ControllerRenderProps<FieldValues, string>}
              id={item.id}
              type={inputType(item.type)}
              labelText={item.label}
              required={item.required}
              invalid={!!errors[item.id]}
              invalidText={errors[item.id]?.message as string}
            />
          )}
        />
      ))}
    </form>
  );
};

export default NewForm;
