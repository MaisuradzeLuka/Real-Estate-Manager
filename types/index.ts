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

export interface IListing {
  id: number;
  address: string;
  zip_code: number;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  image: string;
  city_id: number;
  city: {
    id: number;
    name: string;
    region_id: number;
    region: {
      id: number;
      name: string;
    };
  };
}

export interface ISingleListing extends IListing {
  description: string;
  agent_id: number;
  created_at: Date;
  city: {
    id: number;
    name: string;
    region_id: number;
    region: {
      id: number;
      name: string;
    };
  };
  agent: {
    id: number;
    name: string;
    surname: string;
    email: string;
    avatar: string;
    phone: number;
  };
}
