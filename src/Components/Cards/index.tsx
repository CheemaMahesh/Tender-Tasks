import dots from '../../Assets/dots.png';
import Image from 'next/image';
import Assignee from '../../Assets/assignee.png';
import Date from '../../Assets/date.png';
import Attach from '../../Assets/attach.png';
import Commnets from '../../Assets/comments.png'

interface CardProps {
    classtype?: string | null;
    type?: string | null;
    title?: string | null;
    description?: string | null;
    date?: string | null;
    priority?: string | null;
    comments?: number | null;
    attach?: number | null;
}

const Cards: React.FC<CardProps> = (details) => {
    return (
        <section className={`cards_container ${details?.classtype} w-[300px] h-[200px] mt-2 rounded-md`}>
            <div className='top_card_container w-full h-[165px] flex flex-col gap-2 p-3'>
                <div className="card_top_header w-full h-fit flex justify-between items-center">
                    <div className='card_label' >
                        <div className='card_dot' />
                        <p>{details?.type}</p>
                    </div>
                    <Image className='w-5 h-5 cursor-pointer' src={dots} alt="Dots Icon" />
                </div>
                <p className='card_title'>{details?.title}</p>
                <p className='card_description'>{details?.description}</p>
                <div className='card_assignee'>
                    <p className='text-semibold'>Assignee</p>
                    <Image className='w-5 h-5 rounded-full' src={Assignee} alt="Assignee icon" />
                </div>
                <div className='card_priority_date_wrapper'>
                    <div className='card_date'>
                        <Image className='w-4 h-4' src={Date} alt="Date icon" />
                        <p>{details?.date}</p>
                    </div>
                    <div className='card_priority'>
                        <p>{details?.priority}</p>
                    </div>
                </div>
            </div>
            
            <div className='bottom_card_container w-full h-[35px] flex items-center gap-4 p-2'>
                <div className='card_comments'>
                    <Image className='w-4 h-4' src={Commnets} alt="Comments icon" />
                    <p>{`${details?.comments || 0} Comments`}</p>
                </div>
                <div className='card_attach'>
                    <Image className='w-4 h-4' src={Attach} alt="Attach icon" />
                    <p>{`${details?.attach || 0} Attachments`}</p>
                </div>
            </div>
        </section>
    );
}

export default Cards;