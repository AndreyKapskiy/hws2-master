import s from './Loader.module.css'
import loaderImage from './Loading.png'

export const Loader = () => (

        <div className={s.loader}>
            <img src={loaderImage} alt="Loading..." />
        </div>

    )
