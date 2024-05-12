import { Background } from "@/components/_background";
import { Navbar } from "@/components/_navbar";
import Transition from "@/components/_transition";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <Transition>{children}</Transition> */}
            {children}
        </div>
    );
}