"use client";

import Button from "@/components/shared/Button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { agentSchema } from "@/lib/validation";
import { PopoverClose } from "@radix-ui/react-popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { postRequest } from "@/utils";
import CustomField from "../shared/CustomField/CustomField";

const AddAgent = () => {
  const form = useForm<z.infer<typeof agentSchema>>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phoneNum: 0,
      image: "",
    },
  });

  const submitHandler = async (values: z.infer<typeof agentSchema>) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("surname", values.lastname);
    formData.append("phone", values.phoneNum);
    formData.append("email", values.email);
    formData.append("avatar", values.image);

    postRequest(
      formData,
      "https://api.real-estate-manager.redberryinternship.ge/api/agents"
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button type="button" variant="light">
          Open
        </Button>
      </PopoverTrigger>

      <PopoverContent className=" w-[1000px] translate-x-1/2 flex flex-col justify-between items-center gap-7 py-16 px-24">
        <h3 className="text-2xl font-medium">აგენტის დამატება</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="w-full flex flex-col justify-between items-center gap-7"
          >
            <div className="w-full flex justify-between gap-2">
              <CustomField
                type="text"
                details={{
                  name: "name",
                  label: "სახელი",
                }}
              />

              <CustomField
                type="text"
                details={{
                  name: "lastname",
                  label: "გვარი",
                }}
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <CustomField
                type="email"
                details={{
                  name: "email",
                  label: "ელ-ფოსტა",
                }}
              />

              <CustomField
                type="number"
                details={{
                  name: "phoneNum",
                  label: "ტელეფონი",
                }}
              />
            </div>

            <CustomField
              type="file"
              details={{ name: "image", label: "აირჩიეთ ფოტო", form: form }}
            />

            <div className="flex gap-4 self-end">
              <PopoverClose>
                <Button variant="light" type="button">
                  გაუქმება
                </Button>
              </PopoverClose>

              <PopoverClose>
                <Button variant="dark" type="submit">
                  დაამატე აგენტი
                </Button>
              </PopoverClose>
            </div>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default AddAgent;
