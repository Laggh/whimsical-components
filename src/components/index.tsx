type WhimsicalColor =
	"White"|"Smoke"|"Gray"|"Slate"|
	"Blue"|"Indigo"|"Purple"|"Pink"|
	"Mint"|"Green"|"Brown"|"Crimson"|
	"Red"|"Orange"|"Yellow";

type WhimsicalIcon = string;


type ButtonProps = {
	label: string,
	size: "S"|"M"|"L",
	variant: "Fill"|"Outline",
	color: WhimsicalColor,
	icon: WhimsicalIcon,
	iconPosition: "Left"|"Right",
	state: "Normal"|"Disabled",
	onClick: Function,
};

function Button(props: ButtonProps) {
  return (

  )
}

function TextInput() {
  return (

  )
}

export { Button, TextInput }