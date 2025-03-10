import { useRouter } from "next/navigation";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

const Login = () => {
    const router = useRouter();

    return (
        <button
            className={"bg-gray-800 text-white text-[1.4rem] px-4 py-2 rounded-4xl border-2 border-red-900 hover:bg-red-500 ml-5.5 mt-8 transition"}
            onClick={() => router.push("/login")}>
            <p className={`${rajdhani.className}`}>LOGIN</p>
        </button>
    );
};

export default Login;