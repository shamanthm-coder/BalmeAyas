import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone/other devices on the same Wi‑Fi, and ngrok tunnels, to load Next.js dev assets.
  allowedDevOrigins: [
    "192.168.0.102",
    "192.168.0.103",
    "127.0.0.1",
    "localhost",
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "train-duress-obliged.ngrok-free.dev",
  ],
};

export default nextConfig;
