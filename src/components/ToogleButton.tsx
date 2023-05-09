import MuiToggleButton, { ToggleButtonProps} from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';

interface CustomToggleButtonProps extends ToggleButtonProps {
    'selected-background-color': string;
    'selected-text-color': string;
    'unselected-background-color': string;
    'unselected-text-color': string;
}

export const ToggleButton = styled(MuiToggleButton)<CustomToggleButtonProps>((
    { 'selected-background-color': selectedBackgroundColor,
        'selected-text-color': selectedTextColor,
        'unselected-background-color': unselectedBackgroundColor,
        'unselected-text-color': unselectedTextColor
    }: CustomToggleButtonProps) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: selectedTextColor,
        backgroundColor: selectedBackgroundColor,
    },
    "&:not(Mui-selected), &:not(Mui-selected):hover": {
        color: unselectedTextColor,
        backgroundColor: unselectedBackgroundColor,
    }
}));