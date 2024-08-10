import { http, HttpHandler, HttpResponse } from "msw";

export const ID = {
    success: 1,
    failed: 2,
};

export const handlers: HttpHandler[] = [
    http.get("https://dummyjson.com/users/:id", (req) => {
        const { id } = req.params;

        if (Number(id) === ID.success) {
            return HttpResponse.json({
                id,
                firstName: "John",
                lastName: "Doe",
                age: 30,
                username: "johnd",
            });
        }

        return HttpResponse.error();
    }),
];
