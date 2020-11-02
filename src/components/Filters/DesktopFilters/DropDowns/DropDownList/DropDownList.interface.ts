type ButtonComponentProps = {
  handleClick(): void;
};

interface DropDownListProps {
  ButtonComponent: React.ComponentType<ButtonComponentProps>;
  collection: string[];
}

export default DropDownListProps;
