type WhimsicalColor =
	"White"|"Smoke"|"Gray"|"Slate"|
	"Blue"|"Indigo"|"Purple"|"Pink"|
	"Mint"|"Green"|"Brown"|"Crimson"|
	"Red"|"Orange"|"Yellow";

function colorToBg(color: WhimsicalColor): string {
    const hash = {
        "White": "bg-slate-50",
        "Smoke": "bg-slate-300",
        "Gray": "bg-slate-700",
        "Slate": "bg-slate-800",
        "Blue": "bg-blue-500",
        "Indigo": "bg-indigo-500",
        "Purple": "bg-purple-500",
        "Pink": "bg-pink-500",
        "Mint": "bg-green-400",
        "Green": "bg-green-500",
        "Brown": "bg-yellow-900",
        "Crimson": "bg-red-900",
        "Red": "bg-red-500",
        "Orange": "bg-orange-500",
        "Yellow": "bg-yellow-500"
    };
    return hash[color] || "";
}


function colorToTextColor(color: WhimsicalColor): string {
    const hash = {
        "White": "text-slate-800",
        "Smoke": "text-slate-800",
        "Gray": "text-white",
        "Slate": "text-white",
        "Blue": "text-white",
        "Indigo": "text-white",
        "Purple": "text-white",
        "Pink": "text-white",
        "Mint": "text-white",
        "Green": "text-white",
        "Brown": "text-white",
        "Crimson": "text-white",
        "Red": "text-white",
        "Orange": "text-white",
        "Yellow": "text-slate-800"
    };
    return hash[color] || "";
}

function colorToBorderColor(color: WhimsicalColor): string {
    const hash = {
        "White": "border-2 border-slate-500",
        "Smoke": "border-2 border-slate-500",
        "Gray": "border-2 border-slate-700",
        "Slate": "border-2 border-slate-800",
        "Blue": "border-2 border-blue-500",
        "Indigo": "border-2 border-indigo-500",
        "Purple": "border-2 border-purple-500",
        "Pink": "border-2 border-pink-500",
        "Mint": "border-2 border-green-400",
        "Green": "border-2 border-green-500",
        "Brown": "border-2 border-yellow-900",
        "Crimson": "border-2 border-red-900",
        "Red": "border-2 border-red-500",
        "Orange": "border-2 border-orange-500",
        "Yellow": "border-2 border-yellow-500"
    };
    return hash[color] || "";
}

function colorToSelfTextColor(color: WhimsicalColor): string {
    const hash = {
        "White": "text-slate-500",
        "Smoke": "text-slate-500",
        "Gray": "text-slate-700",
        "Slate": "text-slate-800",
        "Blue": "text-blue-500",
        "Indigo": "text-indigo-500",
        "Purple": "text-purple-500",
        "Pink": "text-pink-500",
        "Mint": "text-green-400",
        "Green": "text-green-500",
        "Brown": "text-yellow-900",
        "Crimson": "text-red-900",
        "Red": "text-red-500",
        "Orange": "text-orange-500",
        "Yellow": "text-yellow-500"
    };
    return hash[color] || "";
}




type WhimsicalIcon = string;

type ButtonProps = {
	label?: string,
	size?: "S"|"M"|"L",
	variant?: "Fill"|"Outline",
	color?: WhimsicalColor,
	icon?: WhimsicalIcon,
	iconPosition?: "Left"|"Right",
	state?: "Normal"|"Disabled",
    width?: number | string,
	onClick?: () => void,
};

function Button({
	label = "",
	size = "M",
	variant = "Fill",
	color = "Indigo",
	icon = undefined,
	iconPosition = "Left",
	state = "Normal",
    width = "auto",
	onClick = () => {}
}: ButtonProps) {
    let bgColor, textColor, textSize, borderColor, extraClasses = "";
    if(variant == "Fill"){
        bgColor = colorToBg(color);
        textColor = colorToTextColor(color);
        textSize = {S: "text-xs", M: "text-sm", L: "text-base"}[size];
        borderColor = "border-2 border-transparent";
    }
    if(variant == "Outline"){
        bgColor = "bg-slate-50";
        textColor = colorToSelfTextColor(color);
        textSize = {S: "text-xs", M: "text-sm", L: "text-base"}[size];
        borderColor = colorToBorderColor(color);
    }

    if(state == "Normal"){
        extraClasses += " hover:brightness-90 active:brightness-75 cursor-pointer";
    }
    if(state == "Disabled"){
        extraClasses += " opacity-50 cursor-not-allowed";
    }

    return (
        <button
            className={`
                px-3.5 py-1.5 rounded 
                ${bgColor} 
                ${textColor}
                ${textSize} 
                ${borderColor}
                ${extraClasses}
                font-medium `}
            style={{ width }}
            onClick={state == "Disabled" ? undefined : onClick}
        >
            {label}
        </button>
    )
}

type TextInputProps = {
	label?: string
	placeholder?: string,
	text?: string | number,
	setText?: Function,
	size?: "S"|"M"|"L",
	width?: string | number,
	icon?: WhimsicalIcon,
	iconPosition?: "Left"|"Right",
	state?: "Normal"|"Error"|"Disabled",
    onChange?: (text: string) => void,
};

function TextInput({
    label = "",
    placeholder = "",
    text = "",
    size = "M",
    width = "auto",
    icon = undefined,
    iconPosition = "Left",
    state = "Normal",
    onChange = () => {}
}: TextInputProps) {
    let borderClass = "";
    let textClass = {S: "text-xs", M: "text-sm", L: "text-base"}[size];
    let focusClass = "";
    let disabledClass = "";

    if(state == "Normal"){
        borderClass= "border-2 border-slate-300 rounded ";
        textClass += " text-slate-800 ";
        focusClass = "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ";
        disabledClass = "disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300";
    }
    if(state == "Error"){
        borderClass= "border-2 border-red-600 rounded ";
        textClass += " text-slate-800 ";
        focusClass = "focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ";
        disabledClass = "disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300";
    }
    if(state == "Disabled"){
        borderClass= "border-2 border-slate-300 rounded ";
        textClass += " text-slate-400 ";
        focusClass = "focus:outline-none focus:ring-2 focus:ring-transparent ";
        disabledClass = "disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300";
    }

    return (
        <div className="gap-0">
            {label && <label className="block text-tiny font-bold text-slate-700 mb-0">{label}</label>}
            <input 
                type="text" 
                placeholder={placeholder}
                value={text}
                onChange={(e) => {
                    if(state == "Disabled") return;
                    onChange(e.target.value);
                }}
                className={`
                    ${borderClass}
                    ${textClass}
                    ${focusClass}
                    ${disabledClass}
                    px-3 py-2
                `}
                style={{ width }}
            />
        </div>
    )
}

export { Button, TextInput }