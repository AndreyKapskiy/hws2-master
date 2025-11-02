import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                },
                '& .MuiSlider-valueLabel': {
                    backgroundColor: '#00CC22',
                    borderRadius: '4px',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
