import { Background } from "@/components/_background";
import { Navbar } from "@/components/_navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}