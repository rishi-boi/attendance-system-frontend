"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "please enter a valid mail",
  }),
  password: z
    .string()
    .min(8, {
      message: "password should be greater than 8 characters",
    })
    .max(16, {
      message: "password should be less than 16 characters",
    }),
  role: z.string(),
});

const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let newUser = await createUser({
      email: values.email,
      password: values.password,
    });

    if (newUser) {
      router.push("/getstarted");
    }
    form.reset();
  }
  return (
    <div className="w-[400px] border p-6 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="email" {...field} />
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
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="role" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
