import * as React from 'react';

import './custom-button.styles.css';

interface ButtonProps {
    label: string,
    onClick: (e: any) => void,
}

const CustomButton = ({label, onClick}: ButtonProps) => (
    <button
        className="custom-button"
        onClick={onClick}
        type="button">
        {label}
    </button>
);

export default CustomButton;
