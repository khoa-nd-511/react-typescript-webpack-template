export async function getUser(id: number) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await res.json();

    return {
        id,
        name: `${user.firstName} ${user.lastName}`,
        username: user.username,
        age: user.age,
    };
}
