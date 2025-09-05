// Type definitions for NativeWind (optional)
// This file is not required by NativeWind, but you can use it for custom types or global declarations.

declare module "nativewind" {
  // Add custom type definitions or module augmentation here if needed
}

// If you want to extend the global JSX namespace for NativeWind props:
declare namespace JSX {
  interface IntrinsicAttributes {
    className?: string;
  }
}
