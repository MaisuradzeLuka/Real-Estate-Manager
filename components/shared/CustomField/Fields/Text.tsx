import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ICustomProps } from "@/types";

const Text = ({ name, label, inputVariant, labelVariant }: ICustomProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full">
            <FormLabel className={`font-medium text-sm mb-2 ${labelVariant}`}>
              {label}
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                {...field}
                className={`w-full ${inputVariant}`}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

export default Text;
