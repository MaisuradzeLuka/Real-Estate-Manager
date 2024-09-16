import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IFileField } from "@/types";

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
      form.setValue("image", imageData);
    } else {
      form.setValue("image", "");
    }
  };

  return (
    <FormField
      name={name}
      render={() => (
        <FormItem className="w-full">
          <FormLabel className={`font-medium text-sm mb-2 ${labelVariant}`}>
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type="file"
              onChange={(e) => fileSelectorHandler(e)}
              className={`w-full ${inputVariant}`}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default Text;
