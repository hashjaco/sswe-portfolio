"use client";

import { useActionState } from "react";
import { Box, Heading, Input, Textarea, Button, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

type FormState = {
    message: string;
};

async function handleSubmit(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    console.log({ name, email, message });

    // In real app, you might POST this to your backend here
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, message }) });

    return { message: "Thank you for reaching out! I'll be in touch soon 🚀" };
}

export default function Contact() {
    const [state, formAction] = useActionState(handleSubmit, { message: "" });

    return (
        <Box maxW="600px" mx="auto" my={10}>
            <Heading as="h1" mb={8} textAlign="center">
                Contact Me
            </Heading>

            {state.message ? (
                <Box p={6} bg="green.100" rounded="md" textAlign="center">
                    <Text fontSize="lg" fontWeight="bold">{state.message}</Text>
                </Box>
            ) : (
                <form action={formAction}>
                    <VStack gap={6} align="stretch">
                        <Box>
                            <Text mb={2} fontWeight="medium">Name</Text>
                            <Input name="name" placeholder="Your name" required />
                        </Box>

                        <Box>
                            <Text mb={2} fontWeight="medium">Email</Text>
                            <Input name="email" type="email" placeholder="your@email.com" required />
                        </Box>

                        <Box>
                            <Text mb={2} fontWeight="medium">Message</Text>
                            <Textarea name="message" placeholder="Let's work together!" rows={6} required />
                        </Box>

                        <Button type="submit" colorScheme="teal" size="lg">
                            Send Message
                        </Button>
                    </VStack>
                </form>
            )}
        </Box>
    );
}
