import type { FC, ReactNode } from 'react';

export type WithNoProps = FC;
export type WithNoChildren<T = Record<string, never>> = FC<T>;
export type WithChildren<T = Record<string, never>> = FC<T & { children: ReactNode }>;
export type WithOptionalChildren<T = Record<string, never>> = FC<T & { children?: ReactNode }>;

export type ComponentProps<T = Record<string, never>> = T;
export type EmptyProps = Record<string, never>;
