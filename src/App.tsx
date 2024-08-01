import { useState } from "react";

import { Button } from "@/components/ui/button";

const App = () => {
    useState();
    return (
        <div className="w-full min-h-screen flex">
            <div className="mx-auto mt-10">
                <h1 className="text-6xl font-bold text-blue-500">Interview</h1>
                <Button variant="outline">Click me</Button>
            </div>
        </div>
    );
};

export default App;
