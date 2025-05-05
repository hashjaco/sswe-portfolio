'use client';

import {HTMLAttributes, useEffect, useState} from "react";
import {Input} from "@chakra-ui/react";

interface DebounceInputProps extends HTMLAttributes<HTMLInputElement> {
    delay?: number;
    onQueryChange?: (value: string | number) => void;
    [key: string]: any;
}

/**
 * @function DebouncedInput
 * @description - A custom input component that delays the onChange event
 * to prevent excessive function calls when the user types quickly.
 *
 * @param props
 */
export default function DebouncedInput(props: DebounceInputProps) {
    const { value, delay = 300, onQueryChange, ...rest } = props;
    const [debouncedValue, setDebouncedValue] = useState<string | number>('');

    useEffect(() => {
        const handler = setTimeout(() => {
            onQueryChange ? onQueryChange(debouncedValue) : null;
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [debouncedValue]);

    return <Input value={debouncedValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDebouncedValue(e.target.value)} placeholder={'What are your all-time favorite sneakers?'} {...rest} />;
}
