"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Label } from "@radix-ui/react-label";
import { Input, TextArea } from "./ui/Input";
import { cn } from "@/utlis/utlis";
import databaseService from "@/app/services/databaseService";
import Loader from "./Loader";
import Success from "./Success";

export function ContactForm() {

    // Setting up useForm.
    const { register, handleSubmit, watch, setError, clearErrors, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<{ name: string; email: string; userMessage: string }>();

    // Watching email to show error if email already taken.
    const email = watch("email");

    // Fetch query to know whether the email is already taken or not.
    const { data: isEmailAlreadyTaken, isError } = useQuery({
        queryKey: ["isEmailAlreadyTaken", { email }],
        queryFn: () => databaseService.checkEmail(email),
        staleTime: Infinity,
        enabled: !!email
    });

    // Getting mutation function to send message to database.
    const { mutateAsync: sendMessageToDatabase } = useMutation({
        mutationFn: (data: { name: string, email: string, userMessage: string }) => databaseService.sendMessage(data.name, data.email, data.userMessage),
    });

    // If email already taken, then show error.
    useEffect(() => {
        if (!isEmailAlreadyTaken) {
            clearErrors("email")
        } else {
            setError("email", {
                message: "Email already taken"
            })
        };

    }, [isEmailAlreadyTaken]);

    // Function to send message to database.
    const sendMessage = async (data: any) => {
        await sendMessageToDatabase(data);
    };

    // If form submitted successfully, then show success message.
    if (isSubmitSuccessful) return <Success />;

    return (
        <>
            {isSubmitting && <Loader />}
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-10 mb-20">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Contact Me
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Feel free to react out to me for any questions or opportunities!
                </p>

                <form className="my-8" onSubmit={handleSubmit(sendMessage)}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <div className="flex flex-row items-center justify-between w-full">
                                <Label htmlFor="name">Your name</Label>
                                {
                                    errors.name &&
                                    <span className="text-red-500 text-sm">{errors?.name.message}*</span>
                                }
                            </div>
                            <Input
                                id="name"
                                placeholder="John"
                                type="text"
                                {...register("name", {
                                    required: "required",
                                    minLength: {
                                        value: 3,
                                        message: "Atleast 3 characters required"
                                    }
                                })}
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <div className="flex flex-row items-center justify-between w-full">
                            <Label htmlFor="email">Email Address</Label>
                            {
                                errors.email &&
                                <span className="text-red-500 text-sm">{errors?.email.message}*</span>
                            }
                        </div>
                        <Input
                            id="email"
                            placeholder="example@example.com"
                            type="email"
                            {...register('email', {
                                required: "required",
                            })}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <div className="flex flex-row items-center justify-between w-full">
                            <Label htmlFor="userMessage">Message</Label>
                            {
                                errors.userMessage &&
                                <span className="text-red-500 text-sm">{errors?.userMessage.message}*</span>
                            }
                        </div>
                        <TextArea
                            id="userMessage"
                            placeholder="Share your thoughts, questions, or feedback..."
                            {...register('userMessage', {
                                required: "required",
                                minLength: {
                                    value: 10,
                                    message: "min length should be 10"
                                }
                            })}
                            className="h-36"
                        />
                    </LabelInputContainer>

                    <button
                        className="my-8 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Send &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
            </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
