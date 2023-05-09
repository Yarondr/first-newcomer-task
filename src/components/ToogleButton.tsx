import MuiToggleButton, { ToggleButtonProps} from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';

interface CustomToggleButtonProps extends ToggleButtonProps {
    selectedBackgroundColor: string;
    selectedTextColor: string;
    unselectedBackgroundColor: string;
    unselectedTextColor: string;
}

export const ToggleButton = styled(MuiToggleButton)<CustomToggleButtonProps>((
    { selectedBackgroundColor, selectedTextColor, unselectedBackgroundColor, unselectedTextColor }: CustomToggleButtonProps) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: selectedTextColor,
        backgroundColor: selectedBackgroundColor,
    },
    "&:not(Mui-selected), &:not(Mui-selected):hover": {
        color: unselectedTextColor,
        backgroundColor: unselectedBackgroundColor,
    }
}));