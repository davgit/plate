import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import { getColorPickerStyles } from './ColorPicker.styles';
import { Colors } from './Colors';
import { CustomColors } from './CustomColors';
import { ColorType, DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from './defaults';

type ColorPickerProps = {
  color?: string;
  colors?: ColorType[];
  customColors?: ColorType[];
  selectedIcon: ReactNode;
  updateColor: (ev: any, colorObj: string) => void;
  clearColor: () => void;
};

export const ColorPicker = ({
  color,
  colors = DEFAULT_COLORS,
  customColors = DEFAULT_CUSTOM_COLORS,
  selectedIcon,
  updateColor,
  clearColor,
}: ColorPickerProps) => {
  const styles = getColorPickerStyles();

  return (
    <div css={styles.root.css}>
      <CustomColors
        color={color}
        colors={colors}
        customColors={customColors}
        selectedIcon={selectedIcon}
        updateColor={updateColor}
      />
      <div css={tw`border border-gray-200 border-solid`} />
      <Colors
        color={color}
        colors={colors}
        selectedIcon={selectedIcon}
        updateColor={updateColor}
      />
      <button
        type="button"
        onClick={clearColor}
        css={tw`w-full bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border-none rounded cursor-pointer`}
      >
        Clear
      </button>
    </div>
  );
};
