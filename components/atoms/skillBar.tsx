import React, { FC } from 'react'

type Props = {
    skill: string,
    length: string
}

const SkillBar: FC<Props> = ({skill, length}) => {
    let display: string = '';

    switch (length){
        case 'w-1/2':
            display += 'Intermediate';
            break;
        
        case 'w-3/4':
            display += 'Advanced';
            break;
        
        case 'w-full':
            display += 'Expert';
            break;
    }

    return (
        <>
            <div className='flex w-full'>
                <span className='text-left w-full text-lg p-3'>{skill}</span>
                <span className='w-full text-right text-lg p-3'>{display}</span>
            </div>
            <div className='h-2.5 rounded-full bg-rai-black outline outline-rai-bone'>
                <div className={(length) + ' rounded-full h-2.5 bg-gradient-to-r from-rai-green via-rai-bone to-rai-blue'}></div>
            </div>
        </>
    )
}

export default SkillBar