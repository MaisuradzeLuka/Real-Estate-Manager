import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ICustomProps } from "@/types";

const Text = ({
  name,
  label,
  inputVariant,
  labelVariant,
  errText,
}: ICustomProps) => {
  return (
    <FormField
      name={name}
      render={({ field, fieldState }) => {
        const isValid = fieldState.isTouched && !fieldState.error;
        const hasError = fieldState.isTouched && fieldState.error;

        return (
          <FormItem className="w-full">
            <FormLabel className={`font-medium text-sm mb-2 ${labelVariant}`}>
              {label}
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                {...field}
                className={`w-full border-border-gray rounded-[8px] ${inputVariant}`}
              />
            </FormControl>
            <p
              className={
                hasError
                  ? "text-red-500"
                  : isValid
                  ? "text-green-500"
                  : "text-black"
              }
            >
              &#10004; {errText}
            </p>
          </FormItem>
        );
      }}
    />
  );
};

export default Text;
