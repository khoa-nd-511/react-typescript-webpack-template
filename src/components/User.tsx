import { getUser } from "@/lib/services/user";
import { useEffect, useState } from "react";

const User = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<
        Awaited<ReturnType<typeof getUser>> | undefined
    >(undefined);

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            try {
                const user = await getUser(id);

                setUser(user);
            } catch (error) {
                setUser(undefined);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>Something went wrong.</p>;
    }

    return <div>{user.name}</div>;
};

export default User;
