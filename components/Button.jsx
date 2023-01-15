import { Chip } from '@mui/material';

export const ChipCompo = ({ label }) => {
   return (
      <Chip
         label={label}
         className={`py-1 px-2 md:py-3 md:px-5 text-[10px] font-medium h-fit md:text-sm rounded-full ${
            filter === label.toLowerCase()
               ? 'bg-[#FFE6D6] text-[#FF4500]'
               : 'bg-[#EBF2FA] text-[#A6B7D4]'
         }`}
         clickable
         onClick={() => setFilter(label.toLowerCase())}
         sx={{
            '& .MuiChip-label': {
               padding: 0,
            },
         }}
      />
   );
};
