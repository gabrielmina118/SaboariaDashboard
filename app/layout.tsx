import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="
                flex 
                items-center 
                justify-center 
                h-full
                w-full
            "
        >
            {children}
        </div>
    );
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthLayout>{children}</AuthLayout>
            </body>
        </html>
    );
}
