import { useRouter } from "next/navigation"
import link from "next/link";
import Link from "next/link";

export function Navbar() {
    const router = useRouter()
    return (
        <header>
            <Link href="/">
                <h1> Task App </h1>
            </Link>
            <div>
                <button
                    onClick={() => router.push("/new")}>
                    Add Task
                </button>
            </div>
        </header>
    )
}
