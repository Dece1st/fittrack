import { useRouter } from "next/navigation";
import { Rajdhani } from "next/font/google";

type ButtonProps = {
    className?: string;
};

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

const SignUp = ({ className }: ButtonProps) => {
    const router = useRouter();

    return (
        <button
            className={`bg-red-800 text-white text-[1.4rem] px-4 py-2 rounded-4xl border-2 border-red-800 hover:bg-red-500 ml-5.5 mt-8 transition ${className}`}
            onClick={() => router.push("/create-account")}>
            <p className={`${rajdhani.className}`}>Sign Up</p>
        </button>
    );
};

export default SignUp;