import React, {useState} from "react";
import ConfirmButtonclassver from "./ConfirmButtonclassver";

function ConfirmButtonfuncver(props) {
    const [isConfirmed, setisConfirmed] = useState(false);

    const handleConfirm = () => {
        setisConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인되었슈" : "확인해주셔~"}
        </button>
    );
}

export default ConfirmButtonfuncver;