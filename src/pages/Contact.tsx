import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  fullName: z.string().trim().min(3, "Name must be at least 3 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactFormData) {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      <PageBanner title="CONTACT" />

      <p className="mt-3 mx-6 text-gray-500">
        Need help with an order? Have a question? We're here for both.
      </p>

      {isSubmitted ? (
        <div role="status" className="text-brand-accent">
          <p className="m-6">
            Message received :-) We'll take it from here. You've done enough
            typing for today.
          </p>
        </div>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 m-4 text-brand-neutral-500"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                {...register("fullName")}
                placeholder="Your full name"
                className="rounded-md border p-3 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
              />
              {errors.fullName && (
                <p className="text-sm text-brand-alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="rounded-md border p-3 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
              />
              {errors.email && (
                <p className="text-sm text-brand-alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              placeholder="What's on your mind?"
              className="rounded-md border p-3 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            />
            {errors.subject && (
              <p className="text-sm text-brand-alert">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              placeholder="Tell us everything..."
              className="rounded-md border p-3 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            />
            {errors.message && (
              <p className="text-sm text-brand-alert">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button name="Send message" type="submit" />
        </form>
      )}
    </section>
  );
}

export default Contact;
