"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "../ui/rainbow-button";
import { getUser } from "@/lib/actions/user.actions";

const formSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(3, { message: "password should be greater than 3 characters" })
    .max(32, { message: "password should be less than 32 characters" }),
});

export default function SignIn({
  login_as,
  className,
}: {
  login_as: string;
  className?: string;
}) {
  const [error, seterror] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await getUser({
        email: values.email,
        password: values.password,
      });

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {error && (
        <p className="text-center my-4 text-red-500">Invalid Credentials</p>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`mt-6 space-y-4 ${className}}`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={`${login_as} email`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={`${login_as} password`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <RainbowButton
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full light:bg-white"
          >
            {form.formState.isSubmitting ? "Loging in...." : "Login"}
          </RainbowButton>
        </form>
      </Form>
    </>
  );
}
