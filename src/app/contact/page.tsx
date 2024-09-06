"use client";
import { ContactForm } from "@/components/ContactForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Contact() {

    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ContactForm />
        </QueryClientProvider>
    );
};
