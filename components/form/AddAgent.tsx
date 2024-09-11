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
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

const AddAgent = () => {
  const form = useForm<z.infer<typeof agentSchema>>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phoneNum: 0,
    },
  });

  const submitHandler = () => {};

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
            onSubmit={submitHandler}
            className="w-full flex flex-col justify-between items-center gap-7"
          >
            <div className="w-full flex justify-between gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-medium text-sm mb-2">
                      სახელი
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-medium text-sm mb-2">
                      გვარიხ
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-medium text-sm mb-2">
                      ელ-ფოსტა
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNum"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-medium text-sm mb-2">
                      ტელეფონი
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

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
