import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IFileField } from "@/types";
import { GoPlusCircle } from "react-icons/go";

const Text = ({
  name,
  label,
  form,
  inputVariant,
  labelVariant,
}: IFileField) => {
  const fileSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageData = e.target.files?.[0];

    if (imageData) {
      form.setValue("image", JSON.stringify(imageData));
    } else {
      form.setValue("image", "");
    }
  };

  return (
    <FormField
      name={name}
      render={() => (
        <FormItem className="w-full">
          <h3 className={`font-medium text-sm mb-2 ${labelVariant}`}>
            {label}
          </h3>

          <FormControl>
            <label
              htmlFor="img"
              className="flex justify-center items-center w-full h-32 border border-border-gray border-spacing-4 border-dashed rounded-[8px] text-3xl cursor-pointer"
            >
              <GoPlusCircle />
              <Input
                id="img"
                type="file"
                onChange={(e) => fileSelectorHandler(e)}
                className={`w-full ${inputVariant} hidden`}
              />
            </label>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default Text;
