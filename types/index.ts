import { UseFormReturn } from "react-hook-form";

export interface ICustomProps {
  name: string;
  label: string;
  errText: string;
  inputVariant?: string;
  labelVariant?: string;
}

export interface IFileField {
  name: string;
  label: string;
  form: UseFormReturn<
    {
      name: string;
      lastname: string;
      email: string;
      phoneNum?: any;
      image?: any;
    },
    any,
    undefined
  >;
  inputVariant?: string;
  labelVariant?: string;
}
