import { ICustomProps, IFileField } from "@/types";
import Email from "./Fields/Email";
import File from "./Fields/File";
import Number from "./Fields/Number";
import Text from "./Fields/Text";

interface ICustomField {
  type: string;
  details: ICustomProps | IFileField;
}

const CustomField = ({ type, details }: ICustomField) => {
  switch (type) {
    case "text":
      return <Text {...details} />;
    case "number":
      return <Number {...details} />;
    case "email":
      return <Email {...details} />;
    case "file":
      return <File {...details} />;
  }
};

export default CustomField;
