import { useEffect, useState } from "react";

const App = () => {
    const [state] = useState();
    useEffect(() => {
        console.log(state);
    }, []);
    return <div className="text-6xl font-bold underline">App</div>;
};

export default App;
