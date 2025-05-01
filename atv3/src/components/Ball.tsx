import { CSSProperties } from "react";
import { BallProps } from "../types";
export function Ball({ label }: BallProps) {
    return <>
        <button style={ballStyle}>{label}</button>
    </>
}


const ballStyle: CSSProperties = {
    backgroundColor: "#ffcbdb",
    color: "black",
    padding: "5px 10px",
    marginRight: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    display: "flex", 
    alignItems: "center", 
    gap: "8px", 
};