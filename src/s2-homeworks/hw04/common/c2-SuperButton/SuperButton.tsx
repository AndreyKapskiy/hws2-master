import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const getStyleButton = (xType= '') => {
        switch (xType) {
            case "red": return ' ' + s.red
            case "secondary": return ' ' + s.secondary
            default: return " " + s.default
        }
    }

    const finalClassName = s.button
         + (disabled
                 ? ' ' + s.disabled
                 : getStyleButton(xType)
                    // ? ' ' + s.red : ' ' + s.secondary)
        + (className ? ' ' + className : '')) // задачка на смешивание классов

            // хType == red => class red
            // хType == secondary => class secondary
            // хType == default => class default
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
