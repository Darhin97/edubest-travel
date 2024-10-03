"use client";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

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
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      setLoading(true);
      const sent = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS! },
      );

      if (sent.status === 200) {
        toast.success("Message sent successfully. You will hear from us soon.");
        form.reset();
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
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
          <Button
            disabled={loading}
            type={"submit"}
            className={"w-full sm:w-3/5 xl:w-1/5"}
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
