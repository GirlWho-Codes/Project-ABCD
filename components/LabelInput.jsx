import {
   Checkbox,
   FormControl,
   FormControlLabel,
   MenuItem,
   Select
} from '@mui/material';
import React from 'react';
import { SVG } from '.';

const LabelInput_main_layout = ({
   label,
   placeholder,
   value,
   type,
   combo,
   menuItems,
   setState,
   hasValue,
   checkbox,
}) => {
   // functions
   const handleChange = (event) => {
      setState(event.target.value);
   };

   const handleChecked = (event) => {
      setState(event.target.checked);
   };

   return (
      <>
         {/* textField */}
         {!combo && !checkbox && (
            <label className='text-xs sm:text-sm text-[#9C9C9C] w-full inline-block'>
               {label}
               <input
                  className='text-xs sm:text-sm border border-softt text-[#1E1E24] py-2 px-1.5 sm:py-3 sm:px-2.5 rounded-lg sm:rounded-xl w-full mt-1 sm:mt-2 focus:outline-none focus:ring-1 focus:ring-softOrange'
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleChange}
               />
            </label>
         )}

         {/* como box */}
         {combo && !checkbox && (
            <label className='text-xs sm:text-sm text-[#9C9C9C] w-full inline-block'>
               {label}
               <FormControl fullWidth>
                  <Select
                     value={value}
                     onChange={handleChange}
                     sx={{
                        '&  .MuiOutlinedInput-input': {
                           paddingX: { xs: '6px', sm: '10px' },
                           paddingY: { xs: '8px', sm: '12px' },
                           fontSize: { xs: '12px', sm: '14px' },
                           color: '#454D54',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                           borderColor: '#FFE6D6',
                        },
                     }}
                  >
                     {!hasValue &&
                        menuItems.map((item, index) => (
                           <MenuItem key={index} value={index}>
                              {item}
                           </MenuItem>
                        ))}

                     {hasValue &&
                        menuItems.map((item, index) => (
                           <MenuItem key={index} value={item.toLowerCase()}>
                              {item}
                           </MenuItem>
                        ))}
                  </Select>
               </FormControl>
            </label>
         )}

         {checkbox && (
            <FormControlLabel
               control={
                  <Checkbox
                     checked={value}
                     onChange={handleChecked}
                     name={label}
                     icon={
                        <div className='fill-transparent stroke-orange'>
                           <SVG.Check />
                        </div>
                     }
                     checkedIcon={
                        <div className='fill-orange stroke-transparent'>
                           <SVG.Check />
                        </div>
                     }
                  />
               }
               className='mx-0'
               label={
                  <span className='text-xs sm:text-sm text-[#313134]'>
                     {label}
                  </span>
               }
            />
         )}
      </>
   );
};

export default LabelInput_main_layout;
