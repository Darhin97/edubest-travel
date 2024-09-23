"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  message: z.string().min(1, {
    message: "message is required",
  }),
});

type FormValues = z.input<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // form.reset();
  };

  return (
    <div className={"w-full h-full"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className={"space-y-4 mb-10"}>
            <div
              className={
                "flex w-full md:space-x-7  space-y-4 flex-col sm:flex-row sm:items-center sm:space-y-0"
              }
            >
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem className={"w-full"}>
                    <FormLabel>Name:</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={"John Doe"}
                        className={
                          "border-transparent rounded-none border-b border-b-black focus:border-b-blue-500"
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem className={"w-full"}>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={"example@mail.com"}
                        className={
                          "border-transparent rounded-none border-b border-b-black focus:border-b-blue-500 "
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name={"message"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your enquiry"
                      {...field}
                      className={
                        " border-black focus:border focus:border-blue-500"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type={"submit"} className={"w-full sm:w-3/5 xl:w-1/5"}>
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
