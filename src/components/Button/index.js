import React from "react";

export default function Button({ children, customclass, text, type = "button", ...props }) {
	return <button className={clsx("capitalize", customclass)}>{text || children}</button>;
}
