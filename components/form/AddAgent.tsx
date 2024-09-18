"use client";

import Button from "@/components/shared/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { agentSchema } from "@/lib/validation";
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
      phoneNum: "",
      image: "",
    },
    mode: "onBlur",
  });

  const submitHandler = async (values: z.infer<typeof agentSchema>) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("surname", values.lastname);
    formData.append("phone", values.phoneNum);
    formData.append("email", values.email);
    formData.append("avatar", JSON.parse(values.image));

    try {
      postRequest(
        formData,
        "https://api.real-estate-manager.redberryinternship.ge/api/agents"
      );

      form.reset();
    } catch (error: any) {
      throw new Error(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button" variant="light">
          + აგენტის დამატება
        </Button>
      </DialogTrigger>

      <DialogContent className=" max-w-5xl flex flex-col justify-between items-center gap-7 py-16 px-24 bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            აგენტის დამატება
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="w-full flex flex-col justify-between items-center gap-7 text-black"
          >
            <div className="w-full flex justify-between gap-2">
              <CustomField
                type="text"
                details={{
                  name: "name",
                  label: "სახელი",
                  errText: "მინიმუმ 2 სიმბოლო",
                }}
              />

              <CustomField
                type="text"
                details={{
                  name: "lastname",
                  label: "გვარი",
                  errText: "მინიმუმ 2 სიმბოლო",
                }}
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <CustomField
                type="email"
                details={{
                  name: "email",
                  label: "ელ-ფოსტა",
                  errText: "გამოიყენეთ @redberry.ge ფოსტა",
                }}
              />

              <CustomField
                type="number"
                details={{
                  name: "phoneNum",
                  label: "ტელეფონი",
                  errText: "მხოლოდ რიცხვები",
                }}
              />
            </div>

            <CustomField
              type="file"
              details={{ name: "image", label: "აირჩიეთ ფოტო", form: form }}
            />

            <div className="flex gap-4 self-end">
              <DialogTrigger>
                <Button
                  variant="light"
                  type="button"
                  onClick={() => form.reset()}
                >
                  გაუქმება
                </Button>
              </DialogTrigger>

              <DialogTrigger>
                <Button variant="dark" type="submit">
                  დაამატე აგენტი
                </Button>
              </DialogTrigger>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAgent;
