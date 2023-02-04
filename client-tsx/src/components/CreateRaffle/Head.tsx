import { steps } from '../../assets/texts'

export default function Head() {
    return (
        <div className='w-[937px] max-w-full mx-auto'>
            <span className='text-[24px] font-bebas opacity-85'> {steps.title} </span>
            <br />
            <span className='text-[15px] whitespace-pre-line opacity-85'> {steps.subtitle} </span>
        </div>
    )
}